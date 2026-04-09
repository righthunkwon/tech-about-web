import React from 'react';
import { Link } from 'react-router-dom';
import BtnDrawerMenu from '@/assets/svgs/btn-drawer-menu.svg?react';
import BtnClose from '@/assets/svgs/btn-close.svg?react';

interface Props {
  open: boolean;
  setOpen: () => void;
}

const MENU_ITEMS = [
  { id: '1', label: 'Tech', path: '/1' },
  { id: '2', label: 'SQL', path: '/2' },
  { id: '3', label: 'Algorithm', path: '/3' },
];

const HeaderDrawerMenu: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className="flex items-center sm:hidden">
      <button onClick={setOpen} className="z-101 cursor-pointer p-2">
        {open ? (
          <BtnClose width={20} height={20} />
        ) : (
          <BtnDrawerMenu width={20} height={20} />
        )}
      </button>

      <div
        className={`bg-ta-base fixed left-0 w-full shadow-lg transition-all duration-400 ${open ? 'top-15 opacity-100' : 'pointer-events-none top-15 -translate-y-2 opacity-0'}`}
      >
        <ul className="flex flex-col">
          {MENU_ITEMS.map((item) => (
            <li key={item.id} className="ta-drawer-menu-item">
              <Link className="block w-full px-5 py-5" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderDrawerMenu;
