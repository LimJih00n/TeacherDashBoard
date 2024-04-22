import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainBoard from './MainBoard';
import Login from './Login';
import SignUp from './SignUp';
import TestRun from './TestRun'; // Import Test instead of TestRun if that's the correct component
import QnABoard from './QnABoard';
import BoardPage from './BoardPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/board/:boardId" element={<BoardPage />} />
        <Route path="/board/:boardId/add" element={<QnABoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/compiler/:stage/:dev" element={<TestRun />} />  // Adjust the path to include parameters
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
