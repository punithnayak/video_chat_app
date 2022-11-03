import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import IntroductionPage from './pages/IntroductionPage/IntroductionPage';
import JoinroomPage from './pages/JoinroomPage/JoinroomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IntroductionPage />}/>
          <Route path="/room" element={<HomePage />} />
          <Route path="/join-room" element={<JoinroomPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
