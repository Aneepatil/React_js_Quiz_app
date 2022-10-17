import React, { useState } from "react";
import QuestionList from "./components/Questions";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app_wrapper">
      {showScore ? (
        <div>
          <div className="completed">Completed !!!</div>
          <div className="score_section">
            Your Score: {score}/{QuestionList.length}
          </div>
        </div>
      ) : (
        <div>
          <div className="question_section_wrapper">
            <div className="question_count">
              Question {currentQuestion + 1} of {QuestionList.length}
            </div>

            <div className="question">
              {QuestionList[currentQuestion].question}
            </div>

            <div className="answer_section_wrapper">
              {QuestionList[currentQuestion].answerList.map((anwerOptions) => {
                return (
                  <li className="answer_list" key={uuidv4()}>
                    <button
                      className="answer_btn"
                      onClick={() =>
                        handleCorrectAnswer(anwerOptions.isCorrect)
                      }
                    >
                      {anwerOptions.answer}
                    </button>
                  </li>
                );
              })}
            </div>
          </div>
          <div>
            <button className="next_btn" onClick={handleNextQuestion}>
              Next ⏭️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
