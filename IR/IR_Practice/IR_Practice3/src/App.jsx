/* eslint-disable react/prop-types */
import { useState } from "react";

const DisplayQuestion = ({
  question,
  correctAnswer,
  options,
  Qno,
  setScore,
  score
}) => {
  return (
    <div>
      <h1>Question {Qno+1} </h1>
      {question}
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label htmlFor="option">
              <input 
              type="radio" 
              name="option"
               id="option" 
               value={option}
               onChange={()=>setScore( option === correctAnswer ? score + 1 : score)}
                />

              {option}
              
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);




  return (
    <div>
      <h1>Quiz App</h1>
     

      {
        questionIndex < questions.length ? (
<>
{
        <DisplayQuestion
          key={questionIndex}
          Qno={questionIndex}
          question={questions[questionIndex].question}
          correctAnswer={questions[questionIndex].correctAnswer}
          options={questions[questionIndex].options}
          setScore={setScore}
          score={score}
        />
      }

      <button onClick={() => setQuestionIndex(questionIndex + 1)}>next</button>
</>
        ):(
<>
  <h2>Quiz Result</h2>
  <p>Your Score {score} / {questions.length}</p>
</>
        )
      }
    </div>
  );
};

export default App;
