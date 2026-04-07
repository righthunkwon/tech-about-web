import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/svgs/logo.svg';
import HeaderDrawerMenu from '@/components/common/HeaderDrawerMenu';
import HeaderNavbarMenu from '@/components/common/HeaderNavbarMenu';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴 오픈 여부
  const location = useLocation(); // 현재 라우터의 위치

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="bg-ta-base fixed top-0 z-100 mx-auto flex h-15 w-full justify-center border-b border-gray-200">
        <nav className="ta-content flex justify-between px-4">
          <Link to="/" className="flex items-center gap-1 px-2">
            <img className="h-6 w-6" src={logo} alt="logo" />
            <span className="text-ta-black text-md font-semibold">
              tech-about
            </span>
          </Link>

          {/* 1. 웹 */}
          <HeaderNavbarMenu />

          {/* 2. 모바일 */}
          <HeaderDrawerMenu open={open} setOpen={() => setOpen(!open)} />
        </nav>
      </header>
      <div className="h-15"></div>
    </>
  );
};

export default Header;
