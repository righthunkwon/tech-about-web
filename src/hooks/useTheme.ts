import { useState, useEffect } from 'react';
import cmUtils from '@/utils/cmUtils';

type Theme = 'light' | 'dark';

const getTheme = (): Theme => {
  //페이지 초기 접근 시 다크모드 세팅
  if (cmUtils.isEmpty(window)) {
    return 'dark';
  }

  //로컬스토리지 기준 모드 세팅
  const taTheme = localStorage.getItem('ta-theme') as Theme | null;
  if (taTheme === 'light' || taTheme === 'dark') {
    return taTheme;
  }

  //로컬스토리지에 저장된 값이 없다면, OS 기준 모드 세팅
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('ta-theme', theme);
  }, [theme]);

  const changeTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, changeTheme };
};
