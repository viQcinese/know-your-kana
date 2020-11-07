import styled from 'styled-components';

interface IButtonProps {
  legend?: string;
}

export const Button = styled.button<IButtonProps>`
  width: 55px;
  height: 55px;
  margin: 8px;
  border-radius: 50%;
  border: none;
  border: 1px solid #d2d2c8;
  background: #e5e5cf;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #666;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;

  position: relative;



  &&::after {
    content: '${props => props.legend}';
    font-size: 16px;
    font-weight: normal;
    color: transparent;
    position: absolute;
    top: 55px;
    transition: 0.2s;
  }

  &&:hover::after {
    content: '${props => props.legend}';
    font-size: 16px;
    font-weight: normal;
    color: black;
    position: absolute;
    top: 55px;
    transition: 0.2s;
  }
`;
