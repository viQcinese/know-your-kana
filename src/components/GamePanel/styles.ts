import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Input = styled.input`
  font-size: 36px;
  text-align: center;

  border: none;
  background: none;
  border-bottom: 1px solid gray;
`;

export const KanaDisplay = styled.span`
  font-family: 'Sawarabi Mincho';
  font-size: 196px;
  color: #2a8020;
  user-select: none;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
`;

export const Score = styled.span``;
