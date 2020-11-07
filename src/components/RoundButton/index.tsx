import React from  'react'

import { Button } from './styles'

interface IRoundButtonProps {
  content?: string;
  onClick?: () => void;
  legend?: string;
}

const RoundButton: React.FC<IRoundButtonProps> = ({ content, legend, onClick, children }) => {
  return (
    <>
      <Button onClick={onClick} legend={legend}>
        { children }
      </Button>
    </>
  )
}

export default RoundButton
