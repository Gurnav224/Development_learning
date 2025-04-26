import React from "react";

interface ScoreProps {
    currentScore: number;
    totalScore: number;
}

export const Score:React.FC<ScoreProps> = ({currentScore, totalScore}) =>{
    return(
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Score</h1>
            <p className="text-xl font-semibold text-gray-800">{currentScore} / {totalScore}</p>
        </div>
    )
}