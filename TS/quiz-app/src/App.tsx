import { useState } from "react";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";
import { quizData } from "./data.ts";
import { checkAnswer } from "./utils/checkAnswer.tsx";

function App() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [score , setScore] = useState<number>(0)

  const currentQuiz = quizData[selectedQuestionIndex]

  const handleClickOption = (selectedOption:number) => {
    if(checkAnswer(selectedOption, currentQuiz.correctOption)){
      setScore(score + 1)
    }
    setSelectedQuestionIndex(selectedQuestionIndex + 1)
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <Header title="Quiz Application" />
      {selectedQuestionIndex < quizData.length ? (
        <Quiz
          key={selectedQuestionIndex}
          quiz={quizData[selectedQuestionIndex]}
          index={selectedQuestionIndex}
          onClickOption={handleClickOption}
        />
      ) : (
        <Score currentScore={score} totalScore={quizData.length} />
      )}
    </main>
  );
}

export default App;
