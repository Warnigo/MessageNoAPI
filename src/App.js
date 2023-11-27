// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from './components/contexts/message';
import Empty from './components/contexts/empty';
import MessagesBox from './components/contexts/messagesBox';
import All from './components/contexts/all';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              isMobile ? (
                <MessagesBox />
              ) : (
                <Empty />
              )
            }
          />
          <Route
            path='/message'
            element={
              isMobile ? (
                <Message />
              ) : (
                <All />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
