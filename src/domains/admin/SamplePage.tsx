import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import Page from '@/components/common/Page';
import Button from '@/components/common/Button';

const SamplePage: React.FC = () => {
  usePageTitle('샘플');
  const [disabled] = useState(true);

  return (
    <>
      <Page className="ta-content mx-auto p-6">
        <h1 className="text-ta-black text-4xl font-semibold">컴포넌트 샘플</h1>
        <div className="mx-4 my-8">
          <h2 className="text-ta-base-content my-4 text-2xl font-semibold">
            버튼
          </h2>

          <div className="flex flex-wrap gap-2">
            <Button
              // 1. 버튼(default)
              variant="default"
              onClick={() => {
                alert('clicked');
              }}
            >
              버튼
            </Button>
            <Button
              // 2. 버튼(outline)
              variant="outline" // 명시
              onClick={() => alert('clicked')}
            >
              버튼(outline)
            </Button>
            <Link
              // 3. 버튼(link)
              to="/"
              className="ta-button-primary"
            >
              버튼(Link)
            </Link>
            <Button
              // 4. 버튼(disabled)
              onClick={() => alert('clicked')}
              disabled={disabled} // 명시 필수
            >
              버튼(disabled)
            </Button>
          </div>
        </div>
      </Page>
    </>
  );
};

export default SamplePage;
