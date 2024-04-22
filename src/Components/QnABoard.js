import React, { useState } from 'react';
import './QnABoard.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';


function QnABoard() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { boardId } = useParams(); // 게시판 ID 가져오기
    const ENDPOINT = "http://localhost:4000";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Axios.post(`${ENDPOINT}/board/${boardId}/add`, {
                title,
                content,
                authorName: "jihoon", // 예시: 현재 로그인된 사용자 정보를 사용할 수 있습니다.
                authorId: boardId // 예시: 현재 로그인된 사용자의 ID
            });
            navigate(`/board/${boardId}`); // 게시글 추가 후 게시판 페이지로 이동
        } catch (error) {
            console.error('Failed to post new entry:', error);
            alert('Failed to post new entry');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formPostTitle">
                <Form.Label>제목</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPostContent">
                <Form.Label>내용</Form.Label>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => setContent(editor.getData())}
                />
            </Form.Group>
            <Button variant="primary" type="submit">Submit Post</Button>
        </Form>
    );
}

export default QnABoard;
