import styled, {css} from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  letter-spacing: 4px;
  color: #470e0e;
  font-weight: normal;
  margin-bottom: 16px; -webkit-font-smoothing: antialiased

  b {
    font-weight: 800;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Block = styled.div<{ display: boolean}>`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.7);
  z-index: ${props => props.display ? 1 : -1};
  position: absolute;
  display: ${props => props.display ? 'flex' : 'none'};

  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
`
