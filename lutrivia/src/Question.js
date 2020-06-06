import React, { Component } from 'react';
import AnswerButton from './AnswerButton';

export class Question extends Component {
  state = {
    selectionMade: false,
    selectedAnswer: null,
    selected: '',
  };

  handleSelection = (e, id) => {
    this.setState(
      {
        selectionMade: true,
        selectedAnswer: e.target.value.toLowerCase(),
        selected: id,
      },
      () => this.checkAnswer()
    );
  };

  checkAnswer = () => {
    if (this.state.selectedAnswer === this.props.answer.toString()) {
      this.props.updateScore();
    }
  };

  render() {
    return (
      <div className="question-container">
        <p className="question-text">{this.props.text}</p>

        <AnswerButton
          id={'true'}
          btnValue={'True'}
          handleSelection={this.handleSelection}
          disabled={this.state.selectionMade}
          selected={this.state.selected}
        />
        <AnswerButton
          id={'false'}
          btnValue={'False'}
          handleSelection={this.handleSelection}
          disabled={this.state.selectionMade}
          selected={this.state.selected}
        />
        {this.state.selectedAnswer === this.props.answer.toString() && (
          <p className="correct">Correct</p>
        )}
      </div>
    );
  }
}

export default Question;

/* <button
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
        </button> */
