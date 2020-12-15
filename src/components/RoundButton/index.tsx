import React from 'react';

import { Button } from './styles';

interface IRoundButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  tooltip?: string;
  fixedLegend?: string;
}

const RoundButton: React.FC<IRoundButtonProps> = ({
  tooltip,
  fixedLegend,
  onClick,
  children,
}) => {
  return (
    <>
      <Button onClick={onClick} tooltip={tooltip} fixedLegend={fixedLegend}>
        {children}
      </Button>
    </>
  );
};

export default RoundButton;
