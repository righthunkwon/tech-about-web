import React from 'react';
import down from '@/assets/svgs/btn-angle-down.svg';

const HomeIntroduce1: React.FC = () => {
  /**
   * 시작하기 페이지로 이동하는 함수
   */
  const onClickStart = () => {
    alert('메인 기능 페이지로 이동');
  };

  /**
   * 최신 파일을 다운로드 하는 함수
   */
  // const onClickDownload = () => {
  //   alert('준비 중입니다.');
  // };

  /**
   * 부드러운 스크롤 이동을 구현한 함수
   */
  const onClickMoveDown = () => {
    const start = window.scrollY; // 현재 스크롤 위치
    const startTime = performance.now(); // 시작시간
    const distance = window.innerHeight - 60 - start; // 뷰포트 - 헤더 - 현재스크롤위치
    const duration = 1000; // 스크롤 이동시간

    /**
     * requestAnimationFrame에 전달하는 함수
     * @param now : 현재시간(디폴트 매개변수)
     */
    const animate = (now: number) => {
      const elapsed = now - startTime; // 애니메이션 시작 후 경과시간
      const progress = Math.min(elapsed / duration, 1); // 애니메이션 진행률(0~1)
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // ease-in-out: 처음과 끝은 느리고 중간은 빠른 S자 곡선
      window.scrollTo(0, start + distance * easeInOut); // 스크롤 이동(가로, 세로)

      // 애니메이션이 끝나지 않았을 경우 프레임마다(60fps) 스크롤 이동
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // 애니메이션 시작
    requestAnimationFrame(animate);
  };

  return (
    <>
      <section className="animate-fade-in flex min-h-[calc(50vh)] flex-col justify-between pt-32 sm:min-h-[calc(100vh)] sm:pt-48">
        <div className="mx-auto flex-1 text-center">
          <div className="my-8 text-3xl leading-normal font-semibold sm:my-12 sm:text-6xl sm:leading-tight">
            <span className="block">개발자를 위한</span>
            <span className="block">바로 적용하는 컨벤션</span>
          </div>

          <div className="flex justify-center gap-2 sm:text-xl">
            {/* 3. 하단으로 스크롤 이동 */}
            <button
              onClick={onClickMoveDown}
              className="text-ta-blue border-ta-gray hover:text-ta-blue-dark rounded-lg border-1 px-4 py-2 hover:cursor-pointer hover:border-black"
            >
              살펴보기
            </button>
            {/* 1. 기능 페이지로 이동 */}
            <button
              onClick={onClickStart}
              className="bg-ta-primary hover:bg-ta-primary-dark text-ta-primary-content rounded-lg px-4 py-2 hover:cursor-pointer"
            >
              시작하기
            </button>
            {/* 시작하기 페이지로 이동 */}

            {/* 2. 최신버전 다운로드 */}
            {/* <button
              onClick={onClickDownload}
              className="bg-ta-primary hover:bg-ta-primary-dark rounded-lg px-4 py-2 text-ta-primary-content hover:cursor-pointer"
            >
              다운로드
            </button> */}
          </div>
        </div>

        <div className="animate-bounce-small mx-auto hidden sm:block">
          <button className="hover:cursor-pointer" onClick={onClickMoveDown}>
            <img className="h-24 w-24" src={down} alt="down" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeIntroduce1;
