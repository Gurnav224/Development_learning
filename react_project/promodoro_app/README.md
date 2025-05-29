# Pomodoro Timer App

A Pomodoro Timer application built with React, TypeScript, and Tailwind CSS.

## Features

- **Multiple Timer Modes**:
  - Pomodoro (25 minutes)
  - Short Break (5 minutes)
  - Long Break (15 minutes)

- **Mode Switching**: Easily switch between Pomodoro, Short Break, and Long Break modes.

- **Reset Button**: Reset the timer at any time.

- **Sound Notification**: Plays a sound when the timer ends.

- **Pomodoro Counter**: Tracks the number of completed Pomodoro sessions.

- **Automatic Mode Switching**:
  - After completing a Pomodoro, automatically switches to a Short Break.
  - After 4 Pomodoros, automatically suggests a Long Break.
  - After completing a break, automatically switches back to Pomodoro mode.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Add a notification sound:
   - Place an MP3 file named `notification.mp3` in the `public/sounds` directory.
   - You can find free notification sounds on websites like:
     - [Mixkit](https://mixkit.co/free-sound-effects/notification/)
     - [Freesound](https://freesound.org/)
     - [Zapsplat](https://www.zapsplat.com/)

### Running the App

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## How to Use

1. Select a timer mode (Pomodoro, Short Break, or Long Break).
2. Click the "Start" button to begin the timer.
3. Work or take a break until the timer ends.
4. When the timer ends, a notification sound will play.
5. The app will automatically suggest the next appropriate mode.
6. Click "Reset" at any time to reset the current timer.

## The Pomodoro Technique

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a "pomodoro," from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.

### Basic Process:
1. Decide on the task to be done.
2. Set the timer for 25 minutes (one Pomodoro).
3. Work on the task until the timer rings.
4. Take a short break (5 minutes).
5. After four Pomodoros, take a longer break (15-30 minutes).
