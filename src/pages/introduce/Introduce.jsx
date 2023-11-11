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
          <h1>Quiz Uygulaması</h1>
          <p>Seviyeyi seç ve başla! Her soru 10 puan değerindedir.</p>
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
          <div onClick={startQuiz} className="introduce-btn">
            Quiz'e Başla !
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Introduce;
