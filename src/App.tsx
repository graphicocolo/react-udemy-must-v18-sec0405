import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
// import ErrorBoundary from './components/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>エラーが発生しました</p>}>
      {/* <ErrorBoundary> */}
        <Suspense fallback={<p>全体ローディング中だよ〜</p>}>
          <ReactQuery />  
        </Suspense>
      {/* </ErrorBoundary> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
