import React, { useCallback, useEffect, useState } from 'react';
import { IKanaControlRows } from '../../../../utils/kanaControl';

interface ICheckboxProps {
  kanaRow: 'a' | 'k' | 's' | 't' | 'n' | 'h' | 'm' | 'y' | 'r' | 'w';
  kanaControlRows: IKanaControlRows;
  setKanaControlRows: React.Dispatch<React.SetStateAction<IKanaControlRows>>;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  kanaRow,
  kanaControlRows,
  setKanaControlRows,
}) => {
  const [isChecked, setIsChecked] = useState(kanaControlRows[kanaRow]);

  useEffect(() => {
    setIsChecked(kanaControlRows[kanaRow]);
  }, [kanaRow, kanaControlRows]);

  const handleCheckBox = useCallback(() => {
    const newKanaControlRows = JSON.parse(JSON.stringify(kanaControlRows));
    newKanaControlRows[kanaRow] = !isChecked;
    setKanaControlRows(newKanaControlRows);
    setIsChecked(!isChecked);
  }, [isChecked, kanaControlRows, kanaRow, setKanaControlRows]);

  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
    </>
  );
};

export default Checkbox;
