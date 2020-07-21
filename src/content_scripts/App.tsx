import React, { useEffect, useState } from 'react';
import Main from './components/Main';

const isIssuePage = () => !!location.pathname.match(/\/issues\/([\d]+|new)/);

function App() {
  const [isTarget, setIsTarget] = useState(isIssuePage());

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTarget !== isIssuePage()) {
        setIsTarget(!isTarget);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [isTarget]);

  return isTarget ? <Main /> : null;
}

export default App;
