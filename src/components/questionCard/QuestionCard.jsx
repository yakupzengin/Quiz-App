// QuestionCard.js
import React, { useEffect, useState } from 'react';
import "./QuestionCard.css";
import OpticalForm from '../opticalForm/OpticalForm';

const QuestionCard = ({ questionsData, score, setScore, count, setCount, setModal, difficulty }) => {
  const [timer, setTimer] = useState(30);
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(null));

  const approvedChoice = (e) => {
    const selectedAnswer = e.currentTarget.value;
    const checkAnswer = selectedAnswer === questionsData[count]?.correct_answer;

    if (checkAnswer) {
      setScore(score + 10);
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[count] = selectedAnswer;
    setSelectedOptions(updatedSelectedOptions);

    setCount(count + 1);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count, setModal]);

  return (
    <div className='questionCard-container'>
      <div className='questionCard'>
        <div className="questionCard-timer">{timer}</div>
        <div className='questionCard-title'>{count + 1}/10 - {questionsData[count]?.question}</div>
        
        {questionsData[count]?.answers?.map((answer, i) => (
          <button
            key={i}
            value={answer}
            onClick={approvedChoice}
            disabled={selectedOptions[count] !== null}
            className={selectedOptions[count] === answer ? 'selected' : ''}
          >
            
            <span style={{ color: "black", fontWeight: "bolder" }}> {String.fromCharCode(65 + i) + ")"}</span> {answer}
          </button>
        ))}
      </div>

      <OpticalForm selectedOptions={selectedOptions}/>
    </div>
  );
};

export default QuestionCard;
