import React from 'react';
import { RiBookLine } from 'react-icons/ri';

import RoundButton from '../RoundButton';
import { Container } from './styles';

interface IButtonsContainerProps {
  handleSetKanaType: any;
  kanaType: any;
  handleSetComposedKana: any;
  isComposedKana: any;
  handleToggleCheatList: any;
}

const ButtonsContainer: React.FC<IButtonsContainerProps> = ({
  handleSetKanaType,
  kanaType,
  handleSetComposedKana,
  isComposedKana,
  handleToggleCheatList,
}) => (
  <Container>
    <RoundButton onClick={handleSetKanaType} tooltip={kanaType}>
      {kanaType === 'hiragana' ? 'あ' : 'カ'}
    </RoundButton>

    <RoundButton
      onClick={handleSetComposedKana}
      tooltip={isComposedKana ? 'diacritics' : 'monographs'}
    >
      {isComposedKana ? '二' : '一'}
    </RoundButton>
    <RoundButton tooltip="kana table" onClick={handleToggleCheatList}>
      <RiBookLine />
    </RoundButton>
  </Container>
);

export default ButtonsContainer;
