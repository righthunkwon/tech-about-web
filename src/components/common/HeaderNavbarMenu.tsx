import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import dark from '@/assets/svgs/btn-dark.svg';
import light from '@/assets/svgs/btn-light.svg';

const MENU_ITEMS = [
  { id: '1', label: 'Tech', path: '/1' },
  { id: '2', label: 'SQL', path: '/2' },
  { id: '3', label: 'Algorithm', path: '/3' },
];

const HeaderNavbarMenu: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <div className="flex items-center">
        <ul className="text-ta-base-content my-auto hidden sm:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.id}>
              <Link className="ta-nav-menu-item" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={changeTheme}
          className="bg-ta-svg mr-8 ml-4 hidden h-7 w-8 cursor-pointer items-center justify-center rounded-full transition-all active:scale-90 sm:flex"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <img className="px-2 py-3" src={dark} alt="dark-mode" />
          ) : (
            <img className="px-2 py-3" src={light} alt="light-mode" />
          )}
        </button>
      </div>
    </>
  );
};

export default HeaderNavbarMenu;
