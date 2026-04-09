import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HomePage from '@/domains/home/HomePage';
import NotFoundPage from '@/domains/not-found/NotFoundPage';
import SamplePage from '@/domains/admin/SamplePage';
import TimerPage from '@/domains/timer/TimerPage';
import Loading from '@/components/common/Loading';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
