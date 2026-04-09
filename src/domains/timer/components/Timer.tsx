import React from 'react';
import { TimerTheme } from '@/types/types';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
  isMoving: boolean;
  theme: TimerTheme;
  onThemeChange: (theme: TimerTheme) => void;
}

const Timer: React.FC<TimerProps> = ({
  timeLeft,
  totalTime,
  isMoving,
  theme,
  onThemeChange,
}) => {
  const size = 500;
  const center = size / 2;
  const strokeWidth = center;
  const radius = center / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (timeLeft / totalTime) * circumference;

  const displayTime = Math.ceil(timeLeft);
  const minutes = Math.floor(displayTime / 60);
  const seconds = displayTime % 60;

  const themeClr = {
    blue: {
      bg: '#E2E8F0', //밝은회색
      gauge: '#2563EB', //파란색
    },
    black: {
      bg: '#343434', //어두운회색
      gauge: '#000000', //검정색
    },
  };

  const currentTheme = themeClr[theme];

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-12">
        <svg
          width={size}
          height={size}
          className="transition-colors duration-500"
          style={{
            transform: 'scaleX(-1) rotate(-90deg)',
            transformOrigin: 'center',
            display: 'block',
          }}
        >
          {/* 1. 배경 */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={currentTheme.bg}
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* 2. 게이지 */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={currentTheme.gauge}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              strokeLinecap: 'butt',
              transition: isMoving
                ? 'none'
                : 'stroke-dashoffset 1.2s ease-in-out',
            }}
          />

          {/* 3. 중앙 */}
          <circle
            cx={center}
            cy={center}
            r={radius * 0.35}
            stroke={currentTheme.bg}
            strokeWidth="8"
            fill={currentTheme.bg}
          />

          {/* 4. 테두리 */}
          <circle
            cx={center}
            cy={center}
            r={center - 10}
            stroke={currentTheme.bg}
            strokeWidth="21"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="text-center">
        <div className="mb-8 flex justify-center gap-5">
          <button
            onClick={() => onThemeChange('blue')}
            className={`h-6 w-6 rounded-full ${
              theme === 'blue'
                ? 'scale-125 hover:pointer-events-none'
                : 'hover:scale-110 hover:cursor-pointer'
            }`}
            style={{ backgroundColor: '#2563EB' }}
          />
          <button
            onClick={() => onThemeChange('black')}
            className={`h-6 w-6 rounded-full ${
              theme === 'black'
                ? 'scale-125 hover:pointer-events-none'
                : 'hover:scale-110 hover:cursor-pointer'
            }`}
            style={{ backgroundColor: '#000000' }}
          />
        </div>

        <div className="text-ta-base-title text-6xl font-black tracking-tight tabular-nums transition-colors duration-500">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="mt-4 text-xl font-bold tracking-[0.3em] text-slate-400">
          {isMoving ? 'FOCUSING' : 'READY'}
        </div>
      </div>
    </div>
  );
};

export default Timer;
