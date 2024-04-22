import React, { useState } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const ENDPOINT = "http://localhost:4000";
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [id, setId] = useState('');
  const [password, setPw] = useState('');

  const handleRoleChange = (val) => setRole(val);

  const handleLogin  = (event) => {
    event.preventDefault();
    // 회원가입 요청을 백엔드로 전송합니다.
    Axios.post(`${ENDPOINT}/login`, { id, password })
      .then(response => {
        // 성공적으로 회원가입 되었을 때의 로직
        navigate(`/board/${id}`); // main board 페이지로 이동합니다.
      })
      .catch(error => {
        // 에러 처리 로직
        
        alert('로그인 중 에러 발생: ' + error.response.data.message);
      });
  };



  return (
    <div className="container mt-5">
      <ToggleButtonGroup type="radio" name="roles" defaultValue={role} onChange={handleRoleChange} className="mb-4">
        <ToggleButton id="tbg-radio-1" value={'student'} variant="outline-primary">학생</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={'teacher'} variant="outline-secondary">선생님</ToggleButton>
      </ToggleButtonGroup>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID 로그인</Form.Label>
          <Form.Control type="text" placeholder="ID를 입력하세요" value={id} onChange={(e) => setId(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" value={password} onChange={(e) => setPw(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 상태 유지" />
        </Form.Group>
        <Button variant="success" type="submit" block>로그인</Button>
      </Form>
      <div className="text-center mt-3">
        <a href="/signup">회원가입</a>
      </div>
    </div>
  );
};

export default LoginPage;
