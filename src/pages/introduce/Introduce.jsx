import React, { useState } from 'react'
import "./Introduce.css"
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {

  const difficulty = ["easy", "medium" , "hard"]
  const [difficultyChange,setDifficultyChange] = useState("easy")
  const navigate = useNavigate()
  const TOTAL_QUESTİONS = 10;

  console.log("difficultyChange",difficultyChange)

  const startQuiz = () => {
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img 
        src='https://st2.depositphotos.com/7752738/11219/v/950/depositphotos_112195158-stock-illustration-quiz-logo-poll-questionnaire-vector.jpg'        alt="" />
        <Dropdown data = {difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">Quiz'e Başla !</div>
      </div>
    </div>
  )
}

export default Introduce