import { create } from 'domain';
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
    /* -webkit-font-smoothing: antialiased */
  }

button {
  cursor: pointer;
}

body {
  background: var(--color-background);
  height: 100vh;
}
`;
