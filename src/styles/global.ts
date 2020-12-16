import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-background: #fafaf5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

button {
  cursor: pointer;
}

body {
  background: var(--color-background);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
