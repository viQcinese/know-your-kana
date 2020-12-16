import React from 'react';

import { Button } from './styles';

interface IRoundButtonProps {
  onClick: (e: React.MouseEvent) => void;
  tooltip?: string;
}

const RoundButton: React.FC<IRoundButtonProps> = ({
  tooltip,
  onClick,
  children,
}) => {
  return (
    <>
      <Button onClick={onClick} tooltip={tooltip}>
        {children}
      </Button>
    </>
  );
};

export default RoundButton;
