import React from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  { id: '1', label: 'Tech', path: '/1' },
  { id: '2', label: 'SQL', path: '/2' },
  { id: '3', label: 'Algorithm', path: '/3' },
];

const HeaderNavbarMenu: React.FC = () => {
  return (
    <>
      <ul className="text-ta-base-content my-auto hidden sm:flex">
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link className="ta-nav-menu-item" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderNavbarMenu;
