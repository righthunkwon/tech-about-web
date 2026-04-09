/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import Page from '@/components/common/Page';
import Timer from '@/domains/timer/components/Timer';
import { TaTheme, TimerTheme } from '@/types/types';
import Button from '@/components/common/Button';
import cmUtils from '@/utils/cmUtils';

const TimerPage: React.FC = () => {
  usePageTitle('타이머');

  const timerTime = 5;
  const [timeLeft, setTimeLeft] = useState(timerTime);
  const [isActive, setIsActive] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  /*******************************************************************************
    
    [테마 설정]

    - 기본 테마는 블루
    - 타이머 테마, 다크/라이트모드, 다크/라이트모드(OS) 순으로 기본 테마 지정

  /*******************************************************************************/
  const [theme, setTheme] = useState<TimerTheme>(() => {
    if (cmUtils.isNotEmpty(window)) {
      // 타이머 테마
      const timerTheme = localStorage.getItem('timer-theme') as TimerTheme;
      if (timerTheme) {
        return timerTheme;
      }

      // 다크/라이트 모드
      const taTheme = localStorage.getItem('ta-theme') as TaTheme;
      if (taTheme === 'light') {
        return 'blue';
      } else if (taTheme === 'dark') {
        return 'black';
      }

      // 다크/라이트 모드(OS)
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'black'
        : 'blue';
    }
    // 기본 테마
    return 'blue';
  });

  const onThemeChange = (newTheme: TimerTheme) => {
    setTheme(newTheme);
    localStorage.setItem('timer-theme', newTheme);
  };

  /*******************************************************************************
    
    [타이머 설정]

    - 애니메이션 실행 시 리렌더링을 방지하기 위해 useState가 아니라 useRef 사용
    
    - requestRef    : 실행 중인 애니메이션의 ID
    - startTimeRef  : 시작을 누른 시점의 타임스탬프
    - pausedTimeRef : 멈춤을 누른 시점의 남은시간
    - animate       : 화면이 갱신될 때마다 호출되는 함수

  /*******************************************************************************/
  const requestRef = useRef<number | undefined>(0);
  const startTimeRef = useRef<number | undefined>(0);
  const pausedTimeRef = useRef<number>(timerTime);

  const animate = (time: number) => {
    // 시작시간이 없을 경우 현재시간을 시작점으로 지정
    if (startTimeRef.current === undefined) {
      startTimeRef.current = time;
    }

    const elapsed = (time - startTimeRef.current) / 1000; // 경과시간
    const nextTime = Math.max(pausedTimeRef.current - elapsed, 0); // 남은시간

    // 남은시간이 있을 경우 다음 프레임 실행
    // 남은시간이 없을 경우 종료
    setTimeLeft(nextTime);
    if (nextTime > 0) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // 시작버튼 클릭 시 애니메이션 실행
    if (isActive) {
      requestRef.current = requestAnimationFrame(animate);
    }
    // 정지버튼 클릭 시 애니메이션 취소, 남은 시간 저장, 시작 시간 초기화
    else {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      pausedTimeRef.current = timeLeft;
      startTimeRef.current = undefined;
    }
    // 클린업
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isActive]);

  const resetTimer = () => {
    setIsActive(false);
    setIsResetting(false);
    pausedTimeRef.current = timerTime;
    setTimeLeft(timerTime);
    startTimeRef.current = undefined;
  };

  const toggleTimer = () => {
    if (timeLeft <= 0) {
      setIsResetting(true);
      resetTimer();
      setTimeout(() => {
        setIsResetting(false);
        setIsActive(true);
      }, 1200);
    } else {
      setIsActive(!isActive);
    }
  };

  return (
    <Page className="bg-ta-base flex items-center justify-center p-6 transition-colors duration-500">
      <div className="flex flex-col items-center space-y-12">
        <Timer
          timeLeft={timeLeft}
          totalTime={timerTime}
          isMoving={isActive && !isResetting}
          theme={theme}
          onThemeChange={onThemeChange}
        />
        <div className="flex gap-6">
          <Button
            className="text-ta-primary-content h-14 w-28 rounded-full"
            onClick={toggleTimer}
            disabled={isResetting}
          >
            {isResetting ? '준비' : isActive ? '일시정지' : '시작'}
          </Button>
          <Button
            variant="outline"
            className="text-ta-base-reverse h-14 w-28 rounded-full"
            onClick={resetTimer}
            disabled={isResetting}
          >
            초기화
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default TimerPage;
