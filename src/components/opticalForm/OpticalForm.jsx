// OpticalForm.js
import React from 'react';
import "./OpticalForm.css";

const OpticalForm = ({ selectedOptions }) => {
  return (
    <div className="optical-form">
      <div className='quiz-title'>Optik Form</div>
      <div className="answer-sheet">
        {selectedOptions.map((selected, i) => (
          <div key={i} className="answer">
             <span style={{color:"darkmagenta",fontWeight:900,fontSize:17}}>Soru {i + 1}:</span>  {selected || '-'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpticalForm;
