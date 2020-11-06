import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: #470e0e;
  font-weight: normal;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 55px;
  height: 55px;
  margin: 8px;
  border-radius: 50%;
  border: none;
  /* border: 1px solid black; */
  background: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: bold;
`;

