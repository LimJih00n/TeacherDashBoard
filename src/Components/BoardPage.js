import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate 추가
import { Container, ListGroup, Button } from 'react-bootstrap';

const BoardPage = () => {
    const [posts, setPosts] = useState([]);
    const { boardId } = useParams();  // URL에서 boardId를 추출
    const navigate = useNavigate();  // 네비게이션 훅 사용
    console.log(boardId); 
    const ENDPOINT = "http://localhost:4000";

    useEffect(() => {
        // 서버에서 게시판 데이터를 가져옴
        const fetchPosts = async () => {
            try {
                const response = await Axios.get(`${ENDPOINT}/board/${boardId}/list`);
                setPosts(response.data);  // 게시글 목록 설정
            } catch (error) {
                console.error('Error fetching board data:', error);
                // 오류 처리, 사용자에게 메시지를 보여주거나 로깅
            }
        };
        fetchPosts();
    }, [boardId]);

    const handleAddPost = () => {
        navigate(`/board/${boardId}/add`);  // 게시글 추가 페이지로 네비게이션
    };

    return (
        <Container>
            <h1>게시판</h1>
            <Button onClick={handleAddPost} className="mb-3">Add Post</Button>  {/* 추가 버튼 */}
            <ListGroup>
                {posts.map(post => (
                    <ListGroup.Item key={post._id}>
                        <h4>{post.title}</h4>
                        <p>작성자: {post.author}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default BoardPage;
