import React from 'react';
import '../App.css'

function ErrorMessage(props) {
  return (
    <div className="error-msg">
        {props.text}
    </div>
  );
}

function SuccessMessage(props) {
    return (
        <div className="success-msg">
          {props.text}
        </div>
    )
}

export {ErrorMessage, SuccessMessage}