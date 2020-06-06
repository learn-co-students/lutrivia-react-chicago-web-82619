import React from 'react';

function AnswerButton(props) {
  return (
    <input
      type="button"
      onClick={(e) => props.handleSelection(e, props.id)}
      className={`game-button question-button ${props.selected === props.id ? 'highlight' : ''}`}
      value={props.btnValue}
      disabled={props.disabled}
      id={props.id}
    />
  );
}

export default AnswerButton;
