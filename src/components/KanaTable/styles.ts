import styled from 'styled-components';

interface IShadowOverlay {
  display: boolean;
}

export const ShadowOverlay = styled.div<IShadowOverlay>`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.7);
  z-index: ${props => (props.display ? 1 : -1)};
  position: absolute;
  display: ${props => (props.display ? 'flex' : 'none')};

  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
`;

export const Modal = styled.div`
  position: absolute;
  text-align: center;
  background: white;
  border-radius: 10px;
  padding: 30px;

  h1 {
    margin-bottom: 16px;
    color: #333;
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 45px 65px 65px 65px 65px 65px;
  grid-template-rows: 65px 65px 65px 65px 65px 65px 65px 65px 65px 65px;

  align-items: center;
  justify-items: center;

  button {
    outline: none;
    border: none;
    background: none;
  }
`;

interface IKana {
  translation: string;
}

export const Kana = styled.div<IKana>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &&::before {
    content: '${props => props.translation}';
    font-size: 16px;
    font-weight: normal;
    color: black;
    position: absolute;
    top: 30px;
    transition: 0.4s;
  }
`;
