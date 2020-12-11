import React, { useCallback, useState } from 'react';
import { IKanaControlBlocks } from '../../../utils/kanaControl';

interface ICheckboxProps {
  kanaRow: 'a' | 'k' | 's' | 't' | 'n' | 'h' | 'm' | 'y' | 'r' | 'w';
  kanaControlBlocks: IKanaControlBlocks;
  handleSetKanaControlBlocks: (
    newKanaControlBlocks: IKanaControlBlocks,
  ) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  kanaRow,
  kanaControlBlocks,
  handleSetKanaControlBlocks,
}) => {
  const [isChecked, setIsChecked] = useState(kanaControlBlocks[kanaRow]);

  const handleCheckBox = useCallback(() => {
    const newKanaControlBlocks = JSON.parse(JSON.stringify(kanaControlBlocks));
    newKanaControlBlocks[kanaRow] = !isChecked;
    handleSetKanaControlBlocks(newKanaControlBlocks);
    setIsChecked(!isChecked);
  }, [isChecked, kanaControlBlocks, kanaRow, handleSetKanaControlBlocks]);

  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
    </>
  );
};

export default Checkbox;
