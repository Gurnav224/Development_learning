/* eslint-disable react/prop-types */

import { useState } from "react";

const DisplayFeedbackQuestion = ({
  question,
  options,
  setSelectedOption,
  selectedOption,
  questionId,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label htmlFor={`${questionId}-${option}`}>
              <input
                type="radio"
                name={questionId}
                id={`${questionId}-${option}`}
                value={option}
                checked={selectedOption[questionId] === option}
                onChange={(event) =>
                  setSelectedOption({
                    ...selectedOption,
                    [questionId]: event.target.value,
                  })
                }
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeedbackApp = () => {
  const questions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  const [selectedOption, setSelectedOption] = useState({});
  const [formState, setFormState] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormState(false);
  };

  const answers = Object.values(selectedOption);

  return (
    <div>
      <h1>Feedback App</h1>

      {formState ? (
        <form onSubmit={handleFormSubmit}>
          {questions.map((question) => (
            <DisplayFeedbackQuestion
              key={question.id}
              questionId={question.id}
              question={question.question}
              options={question.options}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h2>Thanks for the feedback ? </h2>
          <p>Your Answers: {answers.join(", ")}</p>
        </>
      )}
    </div>
  );
};

const DisplayMovieQuestion = ({ question, options, questionId , selectedOption ,setSelectedOption}) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label htmlFor={`${option}-${questionId}`}>
              <input
                type="radio"
                name={questionId}
                id={`${option}-${questionId}`}
                value={option}
                checked={selectedOption[questionId] === option}
          onChange={(event)=>setSelectedOption({...selectedOption,[questionId]:event.target.value})}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MovieQuiz = () => {
  const questions = [
    {
      id: 1,
      question: "Favorite Movie Genre?",
      options: ["Action", "Comedy", "Drama", "Sci-Fi"],
    },
    {
      id: 2,
      question: "Favorite Movie of All Time?",
      options: [
        "The Shawshank Redemption",
        "The Godfather",
        "Pulp Fiction",
        "The Dark Knight",
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState({});

  const [formState , setFormState] = useState(true)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormState(false)
  }

  const favourites = Object.values(selectedOption)


  return (
    <div>
      <h1>Favourite Movie App</h1>

      {
        formState ? (
          <form onSubmit={handleFormSubmit}>
        {questions.map((question) => (
          <DisplayMovieQuestion
            key={question.id}
            questionId={question.id}
            question={question.question}
            options={question.options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
        <button type="submit">submit</button>
      </form>
        ):(
            <>
              <h2>Thank you for sharing your Favourite ? </h2>
          <p>My favourites: {favourites.join(", ")}</p>
            </>

        )
      }

      
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FeedbackApp />

      <MovieQuiz />
    </div>
  );
};

export default App;
