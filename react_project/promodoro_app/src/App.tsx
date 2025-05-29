
import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import { playNotificationSound } from './utils/audio';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

function App() {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [isActive, setIsActive] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // Set background color based on current mode
  useEffect(() => {
    document.body.className = `bg-${mode === 'pomodoro' ? 'pomodoro' : mode === 'shortBreak' ? 'shortbreak' : 'longbreak'} bg-opacity-10`;
  }, [mode]);

  const handleTimerComplete = () => {
    // Play notification sound
    playNotificationSound();

    // Reset timer
    setIsActive(false);

    // If pomodoro completed, increment counter
    if (mode === 'pomodoro') {
      const newCount = completedPomodoros + 1;
      setCompletedPomodoros(newCount);

      // After 4 pomodoros, suggest a long break
      if (newCount % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      // After a break, go back to pomodoro
      setMode('pomodoro');
    }
  };

  const handleReset = () => {
    setIsActive(false);
    // Force a timer reset by temporarily changing the mode and then changing it back
    const currentMode = mode;
    const tempMode: TimerMode = currentMode === 'pomodoro' ? 'shortBreak' : 'pomodoro';
    setMode(tempMode);
    setTimeout(() => setMode(currentMode), 10);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>

      <Controls
        mode={mode}
        setMode={setMode}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <div className="mt-12 bg-gray-800 bg-opacity-50 p-16 rounded-3xl shadow-xl">
        <Timer
          mode={mode}
          isActive={isActive}
          onComplete={handleTimerComplete}
          onReset={handleReset}
        />
      </div>

      {completedPomodoros > 0 && (
        <div className="mt-8 text-xl">
          Completed Pomodoros: {completedPomodoros}
        </div>
      )}
    </div>
  );
}

export default App;
