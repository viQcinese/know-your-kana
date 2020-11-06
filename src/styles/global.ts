import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-background: #f5faf5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

button {
  cursor: pointer;
}

body {
  background: var(--color-background);
}
`;
