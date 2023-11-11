import React from 'react'
import "./Modal.css"
const Modal = ({score}) => {
  return (
    <div className='modal'>
        <div className='modal-title'>Your Score : {score} / 100</div>
        <div onClick={() => window.location = "/" } className="modal-btn">Start Again ! </div>
    </div>
  )
}

export default Modal