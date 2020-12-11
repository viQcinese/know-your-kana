import React from  'react'

import { Button } from './styles'

interface IRoundButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  legend?: string;
  fixedLegend?: string;
}

const RoundButton: React.FC<IRoundButtonProps> = ({ legend, fixedLegend, onClick, children }) => {
  return (
    <>
      <Button onClick={onClick} legend={legend} fixedLegend={fixedLegend}>
        { children }
      </Button>
    </>
  )
}

export default RoundButton
