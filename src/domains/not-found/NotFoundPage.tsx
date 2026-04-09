import Page from '@/components/common/Page';
import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  usePageTitle('페이지를 찾을 수 없습니다.');

  return (
    <>
      <Page className="flex flex-col items-center text-center">
        <div className="mt-60 mb-6">
          <div className="text-ta-base-title my-2 text-2xl leading-tight font-semibold sm:text-3xl">
            페이지를 찾지 못했습니다
          </div>
          <div className="text-ta-base-content text-sm sm:text-base">
            페이지 주소가 정확한지 확인해주세요
          </div>
        </div>

        <Link to={'/'} className="ta-button-primary">
          홈으로 가기
        </Link>
      </Page>
    </>
  );
};

export default NotFoundPage;
