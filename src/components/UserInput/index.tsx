import React from 'react';

import { Input } from './styles';

interface IUserInput {
  inputRef: any;
  inputValue: any;
  handleInputChange: any;
  handleSubmit: any;
}

const UserInput: React.FC<IUserInput> = ({
  inputRef,
  inputValue,
  handleSubmit,
  handleInputChange,
}) => (
  <Input
    ref={inputRef}
    value={inputValue}
    onChange={handleInputChange}
    onKeyDown={handleSubmit}
  />
);

export default UserInput;
