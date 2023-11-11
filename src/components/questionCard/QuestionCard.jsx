import React, { useEffect, useState } from 'react'
import "./QuestionCard.css"

const QuestionCard = ({questionsData,score,setScore,count,setCount,modal,setModal}) => {
    const [timer, setTimer] = useState(30);

    
    const approvedChoice = (e) => {
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        console.log(checkAnswer)
        if(checkAnswer){
            setScore(score+10)
        }
        setCount(count+1)
        if(count ==9 ) setModal(true)
        setTimer(30)
    }

    useEffect( () => {

        const interval = setInterval( () => {
            if(timer>0){
                setTimer(timer-1)
            }
            if(timer == 0 && count < 10){
                setCount(count+1)
                setTimer(30)
            }else if(count>=10){
                setModal(true)
            }
        },1000)

        return () => {
            clearInterval(interval)
        }

    },[timer])
    // depens on the timer



  return (
    <div className='questionCard'>
        <div className="questionCard-timer">{timer}</div>
        <div className='questionCard-title' >{count + 1}/10 - { questionsData[count]?.question}</div>
        {
            questionsData[count]?.answers?.map( (answer,i) => (
                <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
            ))
        }
        
    </div>
  )
}

export default QuestionCard