import React, { Component } from 'react'
import data from './data'
import Question from './Question'

export class App extends Component {

  state = {
    questions: data.questions,
    score: 0,
    name: ""
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    let displayedQuestions = [...this.state.questions]
    return (
      <div className="game-container">
        <h1 className="game-title">Lutrivia</h1>
        <div className="game-header">
          <button className="game-button new-game">New Game</button>
          <p className="score">Score: {this.state.score}</p>
        </div>
        <div className="questions-list-container">
          {displayedQuestions.map((question, idx) => {
            return <Question key={idx} {...question} />
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className="name-input" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
          <button className="game-button submit-button">Submit Score</button>
        </form>
      </div>
    )
  }
}

export default App
