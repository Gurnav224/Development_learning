type ControlsProps = {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  setMode: (mode: 'pomodoro' | 'shortBreak' | 'longBreak') => void;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

export default function Controls({ mode, setMode, isActive, setIsActive }: ControlsProps) {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <div className="bg-gray-800 rounded-full p-2 flex justify-between">
        <button
          onClick={() => setMode('pomodoro')}
          className={`py-3 px-6 rounded-full font-bold transition-all ${
            mode === 'pomodoro' ? 'bg-pomodoro text-gray-900' : 'text-gray-400 hover:text-white'
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => setMode('shortBreak')}
          className={`py-3 px-6 rounded-full font-bold transition-all ${
            mode === 'shortBreak' ? 'bg-shortbreak text-gray-900' : 'text-gray-400 hover:text-white'
          }`}
        >
          Short Break
        </button>
        <button
          onClick={() => setMode('longBreak')}
          className={`py-3 px-6 rounded-full font-bold transition-all ${
            mode === 'longBreak' ? 'bg-longbreak text-gray-900' : 'text-gray-400 hover:text-white'
          }`}
        >
          Long Break
        </button>
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="bg-gray-900 bg-opacity-10 hover:bg-opacity-20 px-12 py-4 rounded-full uppercase tracking-[0.5em] font-bold"
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
