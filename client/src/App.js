
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      questions: [
        {
          question: "What is 2+2?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "3", isCorrect: false },
            { answerText: "4", isCorrect: true }
          ]
        },
        {
          question: "What is 5-3?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "3", isCorrect: false },
            { answerText: "2", isCorrect: true }
          ]
        },
        {
          question: "What is 10/2?",
          answerOptions: [
            { answerText: "3", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "5", isCorrect: false },
            { answerText: "6", isCorrect: true }
          ]
        },
        {
          question: "What is 6*7?",
          answerOptions: [
            { answerText: "36", isCorrect: false },
            { answerText: "42", isCorrect: true },
            { answerText: "48", isCorrect: false },
            { answerText: "54", isCorrect: false }
          ]
        }
      ],
      score: 0,
      showScore: false
    };
  }

  handleAnswerButtonClick = (isCorrect) => {
    const { score, currentQuestion, questions } = this.state;

    if (isCorrect) {
      this.setState({
        score: score + 1
      });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState({
        currentQuestion: nextQuestion
      });
    } else {
      this.setState({
        showScore: true
      });
    }
  };

  render() {
    const { currentQuestion, questions, score, showScore } = this.state;

    return (
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => this.handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
