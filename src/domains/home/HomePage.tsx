import React, { useState } from 'react';
import Page from '@/components/common/Page';
import left from '@/assets/svgs/btn-angle-left.svg';
import right from '@/assets/svgs/btn-angle-right.svg';
import usePageTitle from '@/hooks/usePageTitle';

const PSTG_LIST = [
  {
    pstg_id: 1,
    src_cd: 'NAVER',
    pstg_ttl: '개발자는 AI에 대체될 것인가에 대한 고민',
    pstg_expln:
      'AI가 개발자의 종말을 초래할까요? 이 질문에 대한 시각을 공유합니다.',
    pstg_thmb_url:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    pstg_dttm: '2026-02-18 10:00:00',
    color: 'bg-red-400',
    view_cnt: 1250,
    tags: ['AI', 'Future', 'Development'],
    detail: {
      pstg_smry:
        '{"intro": "AI의 발전", "body": "개발자의 역할 변화", "conclusion": "공생의 길"}',
      pstg_url: 'https://d2.naver.com/helloworld/12345',
    },
  },
  {
    pstg_id: 2,
    src_cd: 'KAKAO',
    pstg_ttl: 'React와 Vue의 생산성 차이',
    pstg_expln:
      'ERP 시스템 개발에서 두 프레임워크가 가지는 장단점을 분석합니다.',
    pstg_thmb_url:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    pstg_dttm: '2026-03-01 14:30:00',
    color: 'bg-blue-400',
    view_cnt: 890,
    tags: ['React', 'Vue', 'ERP'],
    detail: {
      pstg_smry:
        '{"intro": "프레임워크 비교", "body": "ERP 환경 테스트", "conclusion": "적합한 선택 도구"}',
      pstg_url: 'https://tech.kakao.com/posts/678',
    },
  },
  {
    pstg_id: 3,
    src_cd: 'NAVER',
    pstg_ttl: 'MyBatis를 활용한 쿼리 최적화',
    pstg_expln: 'MSSQL 환경에서 대용량 데이터를 처리하는 효율적인 방법입니다.',
    pstg_thmb_url: 'https://images.unsplash.com/photo-1544383121-13794b150c9f',
    pstg_dttm: '2026-03-10 09:00:00',
    color: 'bg-green-400',
    view_cnt: 2100,
    tags: ['MyBatis', 'MSSQL', 'Optimization'],
    detail: {
      pstg_smry:
        '{"intro": "쿼리 성능 이슈", "body": "인덱스 및 매핑 최적화", "conclusion": "결과 분석"}',
      pstg_url: 'https://d2.naver.com/helloworld/999',
    },
  },
];

const HomePage: React.FC = () => {
  usePageTitle('tech-about');
  const [idx, setIdx] = useState(0);
  // 이전 버튼: 0이면 마지막으로, 아니면 -1 (순방향 역순)
  const onClickPrev = () =>
    setIdx((prev) => (prev === 0 ? PSTG_LIST.length - 1 : prev - 1));

  // 다음 버튼: 마지막이면 0으로, 아니면 +1 (순방향 정순)
  const onClickNext = () =>
    setIdx((prev) => (prev === PSTG_LIST.length - 1 ? 0 : prev + 1));
  const curr = PSTG_LIST[idx];

  return (
    <Page>
      <div className="mx-auto w-full max-w-[1140px] px-6 py-6 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center">
          <div
            className={`order-first h-80 w-full rounded-2xl md:order-last md:flex-2/3 ${curr.color}`}
          />

          <div className="flex h-80 flex-1 flex-col px-4 md:flex-1/2">
            <div className="flex-1 md:pr-8 lg:pr-16">
              <h2 className="text-ta-base-title mb-2 line-clamp-3 pt-6 text-xl leading-tight font-semibold md:mb-4 md:text-3xl">
                {curr.pstg_ttl}
              </h2>
              <p className="text-ta-base-content line-clamp-3 text-sm md:text-base">
                {curr.pstg_expln}
              </p>
            </div>

            <div className="mt-24 flex gap-3 text-center md:mt-0">
              <button
                onClick={onClickPrev}
                className="bg-ta-svg h-12 w-12 rounded-full p-2 hover:cursor-pointer hover:brightness-90"
              >
                <img src={left} alt="prev" />
              </button>
              <button
                onClick={onClickNext}
                className="bg-ta-svg h-12 w-12 rounded-full p-2 hover:cursor-pointer hover:brightness-90"
              >
                <img src={right} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
