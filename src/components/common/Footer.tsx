import React from 'react';
import { Link } from 'react-router-dom';
import github from '@/assets/svgs/btn-github.svg';
import notion from '@/assets/svgs/btn-notion.svg';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-ta-gray-dark text-ta-primary-content border-t-ta-divider z-100 w-full border-t-1 p-8 text-sm sm:p-12 sm:text-base">
        <div className="mx-auto max-w-[1140px] sm:p-4">
          <ul className="pb-8 pl-1">
            <li className="mb-3 font-bold">서비스</li>
            <li className="py-2">
              <Link
                to={
                  'https://www.notion.so/righthun/dd055ee9f54445e89cd84d755071f7bd'
                }
                target="_blank"
                className="text-ta-gray-light py-2 pr-4 hover:brightness-80"
              >
                소개
              </Link>
            </li>
            {/* <li className="py-2">
              <Link
                className="text-ta-subtext-light py-2 pr-4 hover:brightness-80"
                to={'/download'}
              >
                다운로드
              </Link>
            </li> */}
            <li className="py-2">
              <Link
                className="text-ta-gray-light py-2 pr-4 hover:brightness-80"
                to={'/support'}
              >
                문의하기
              </Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="h-12 w-12">
              <Link to={'https://github.com/righthunkwon'} target="_blank">
                <img
                  className="hover:brightness-90"
                  src={github}
                  alt="github"
                />
              </Link>
            </li>
            <li className="h-12 w-12">
              <Link
                to={
                  'https://www.notion.so/righthun/dd055ee9f54445e89cd84d755071f7bd'
                }
                target="_blank"
              >
                <img
                  className="p-1 hover:brightness-90"
                  src={notion}
                  alt="notion"
                />
              </Link>
            </li>
            {/* <li className="h-12 w-12">
              <Link to={'mailto:dhtmxk8134@naver.com'}>
                <img className="hover:brightness-90" src={email} alt="email" />
              </Link>
            </li> */}
          </ul>
          <div className="text-ta-gray-light my-4 text-xs">
            Copyright 2026. 권정훈 all rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
