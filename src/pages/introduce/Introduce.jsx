// Introduce.js
import React, { useState } from 'react';
import "./Introduce.css";
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo.jpg";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("easy");
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src={logo} alt="" />
        
        <div >
          <h1>Quiz Application</h1>
          <p>Choose the level and get started! Each question is worth 10 points.</p>
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
          <div onClick={startQuiz} className="introduce-btn">
          Start Quiz!
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Introduce;
