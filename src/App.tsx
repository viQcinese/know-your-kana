import React from 'react';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
};

export default App;
