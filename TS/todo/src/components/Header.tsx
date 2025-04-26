import React from "react"

interface HeaderProps{
    title:string
}

// Updated Header component to use Tailwind CSS classes
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold text-blue-600 mb-6">{title}</h1>
  );
};
