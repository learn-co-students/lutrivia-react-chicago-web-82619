import React, { Component } from 'react';
import data from './data';
import Question from './Question';
import axios from 'axios';

export class App extends Component {
  state = {
    questions: [],
    score: 0,
    name: '',
    scores: [],
  };

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      score: this.state.score,
    };
    axios.post('http://localhost:3000/scores', formData).then((res) => {
      if (res.status === 201) {
        this.getScores();
        this.handleNewGame();
        this.setState({
          name: '',
          score: 0,
        });
      }
    });
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleNewGame = () => {
    this.setState(
      {
        score: 0,
        questions: [],
      },
      () => this.getQuestions()
    );
  };

  getQuestions = () => {
    this.setState({
      questions: data.questions,
    });
  };

  getScores = () => {
    axios
      .get('http://localhost:3000/scores')
      .then((scores) => this.setState({ scores: scores.data }));
  };

  componentDidMount = () => {
    this.getQuestions();
    this.getScores();
  };

  render() {
    console.log(this.state.scores);
    let displayedQuestions = [...this.state.questions];
    let displayedScores = [...this.state.scores];

    return (
      <div>
        <div className="game-container">
          <h1 className="game-title">Lutrivia</h1>
          <div className="game-header">
            <button
              className="game-button new-game"
              onClick={this.handleNewGame}
            >
              New Game
            </button>
            <p className="score">Score: {this.state.score}</p>
          </div>
          <div className="questions-list-container">
            {displayedQuestions.map((question, idx) => {
              return (
                <Question
                  key={idx}
                  {...question}
                  updateScore={this.updateScore}
                />
              );
            })}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="name-input"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
            <button className="game-button submit-button">Submit Score</button>
          </form>
        </div>
        <div className="scores-container">
          <h2>Scores</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {displayedScores.map((score) => {
                return (
                  <tr key={score.id}>
                    <td>{score.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
