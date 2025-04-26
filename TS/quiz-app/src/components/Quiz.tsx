import React from "react";

interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    correctOption?: number;
  };
  index: number;
  onClickOption: (index: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ quiz, index, onClickOption }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl mb-8">
      <p className="text-lg font-semibold mb-4 text-gray-800">
        Q.NO.{index + 1} : {quiz.question}
      </p>
      <ul className="space-y-3">
        {quiz.options.map((opt, idx) => (
          <li
            onClick={() => onClickOption(idx)}
            key={idx}
            className="cursor-pointer bg-purple-100 hover:bg-purple-300 transition-colors rounded px-4 py-2 text-gray-700 text-base border border-purple-200 hover:border-purple-400"
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};
