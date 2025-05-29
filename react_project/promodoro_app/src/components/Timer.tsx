import { useEffect, useState } from 'react';

type TimerProps = {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  isActive: boolean;
  onComplete: () => void;
  onReset: () => void;
};

const TIMER_DURATION = {
  pomodoro: 25 * 60, // 25 minutes in seconds
  shortBreak: 5 * 60, // 5 minutes in seconds
  longBreak: 15 * 60, // 15 minutes in seconds
};

export default function Timer({ mode, isActive, onComplete, onReset }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION[mode]);

  // Reset timer when mode changes
  useEffect(() => {
    setTimeLeft(TIMER_DURATION[mode]);
  }, [mode]);

  // Timer countdown logic
  useEffect(() => {
    let interval: number | undefined;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      onComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onComplete]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle local reset
  const handleLocalReset = () => {
    // Reset the timer to default duration for current mode
    setTimeLeft(TIMER_DURATION[mode]);
    // Call the parent's onReset function
    onReset();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-bold mb-8">{formatTime(timeLeft)}</div>
      <button
        onClick={handleLocalReset}
        className="bg-gray-900 bg-opacity-10 hover:bg-opacity-20 px-12 py-4 rounded-full uppercase tracking-[0.5em] font-bold"
      >
        Reset
      </button>
    </div>
  );
}
