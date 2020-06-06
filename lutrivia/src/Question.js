import React, { Component } from 'react';

export class Question extends Component {
  state = {
    selectionMade: false,
    selectedAnswer: null,
    trueBtn: 'not-selected',
    falseBtn: 'not-selected',
  };

  handleSelection = (e) => { this.setState({
      selectionMade: true,
      selectedAnswer: e.target.value,
      trueBtn: e.target.value ? "selected" : "not-selected",
      falseBtn: !e.target.value ? "selected" : "not-selected",
    });
  };

  checkAnswer = () => {
    return this.state.selectedAnswer === this.props.answer.toString()
      ? true
      : false;
  };

  render() {
    console.log(this.state);
    return (
      <div className="question-container">
        <p className="question-text">{this.props.text}</p>
        <button
          className={`game-button question-button ${
            this.state.trueBtn === 'not-selected' ? '' : 'hightlight'
          }`}
          disabled={this.state.selectionMade}
          value="true"
          onClick={this.handleSelection}
        >
          True
        </button>
        <button
          className={`game-button question-button`}
          disabled={this.state.selectionMade}
          value="false"
          onClick={this.handleSelection}
        >
          False
        </button>
      </div>
    );
  }
}

export default Question;
