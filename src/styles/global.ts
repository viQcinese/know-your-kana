import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
}
`;
