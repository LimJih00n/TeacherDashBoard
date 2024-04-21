// SignUpPage.jsx
import React, { useState } from 'react';
import { Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function SignUpPage() {
    
  const ENDPOINT = "http://localhost:4000";
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    phone: '',
    email: '',
    type:0
  });

  const handleUserTypeChange = (value) => {
    setUserType(value); // value바꾸기
    setFormData({
      ...formData,
      type: value === 'student' ? 0 : 1  // 학생은 0, 선생님은 1로 설정
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const navigate = useNavigate(); // useNavigate hook을 사용하여 navigation 함수를 얻습니다.

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 요청을 백엔드로 전송합니다.
    console.log(formData);
    Axios.post(`${ENDPOINT}/signup`, formData)
      .then(response => {
        // 성공적으로 회원가입 되었을 때의 로직
        alert('가입성공!');
        navigate('/login');  // 로그인 페이지로 이동합니다.
      })
      .catch(error => {
        // 에러 처리 로직
        alert('가입 실패: ' + error.message);
      });
  };

  const isTeacher = userType === 'teacher'; // 선생님일 때 필수 필드 조정

  return (
    <div className="signup-container">
      <Form onSubmit={handleSubmit}>
      <ToggleButtonGroup type="radio" name="userType" value={formData.type === 0 ? 'student' : 'teacher'} onChange={(val) => handleUserTypeChange(val)} className="mb-3">
          <ToggleButton id="student" value="student" variant="outline-primary">
            학생
          </ToggleButton>
          <ToggleButton id="teacher" value="teacher" variant="outline-secondary">
            선생님
          </ToggleButton>
        </ToggleButtonGroup>

        <Form.Group controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="이름을 입력하세요" 
            required 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="ID를 입력하세요" 
            required 
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="비밀번호를 입력하세요" 
            required 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>전화번호</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="전화번호를 입력하세요" 
            required={isTeacher}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="이메일을 입력하세요" 
            required={isTeacher}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3">
          회원가입
        </Button>
      </Form>
    </div>
  );
}

export default SignUpPage;
