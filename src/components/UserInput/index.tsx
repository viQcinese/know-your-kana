import React from 'react';

import { Input } from './styles';

interface IUserInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const UserInput: React.FC<IUserInput> = ({
  value,
  onChange,
  onSubmit,
  inputRef,
}) => (
  <form onSubmit={onSubmit}>
    <Input value={value} onChange={onChange} ref={inputRef} />
  </form>
);

export default UserInput;
