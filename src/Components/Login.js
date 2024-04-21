import React, { useState } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Axios from 'axios';  // Ensure Axios is imported if you're using it

const LoginPage = () => {
  const [role, setRole] = useState('student'); // 'student' 또는 'teacher'를 위한 상태

  const handleRoleChange = (val) => setRole(val);
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  return (
    <div className="container mt-5">
      <ToggleButtonGroup type="radio" name="roles" defaultValue={role} onChange={handleRoleChange} className="mb-4">
        <ToggleButton id="tbg-radio-1" value={'student'} variant="outline-primary">
          학생
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={'teacher'} variant="outline-secondary">
          선생님
        </ToggleButton>
      </ToggleButtonGroup>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID 로그인</Form.Label>
          <Form.Control type="text" placeholder="ID를 입력하세요" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 상태 유지" />
        </Form.Group>

        <Button variant="success" type="submit" block>
          로그인
        </Button>
      </Form>
      <div className="text-center mt-3">
        <a href="/signup">회원가입</a>
      </div>
    </div>
  );
};

export default LoginPage;
