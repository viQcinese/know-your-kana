import React from 'react';
import { RiBookLine } from 'react-icons/ri';

import RoundButton from './components/RoundButton';
import { Container } from './styles';

interface IButtonsContainerProps {
  isKatakana: boolean;
  handleSetIsKatakana: () => void;
  isDigraphEnabled: boolean;
  handleSetIsDigraphEnabled: () => void;
  isDiacriticsEnabled: boolean;
  handleSetIsDiacriticsEnabled: () => void;
  toggleKanaTable: (event: React.MouseEvent) => void;
}

const ButtonsContainer: React.FC<IButtonsContainerProps> = ({
  isKatakana,
  handleSetIsKatakana,
  isDigraphEnabled,
  handleSetIsDigraphEnabled,
  isDiacriticsEnabled,
  handleSetIsDiacriticsEnabled,
  toggleKanaTable,
}) => (
  <Container>
    <RoundButton
      onClick={handleSetIsKatakana}
      tooltip={isKatakana ? 'katakana' : 'hiragana'}
    >
      {isKatakana ? 'カ' : 'あ'}
    </RoundButton>

    <RoundButton
      onClick={handleSetIsDiacriticsEnabled}
      tooltip={isDiacriticsEnabled ? 'diacritics' : 'no diacritics'}
    >
      {isDiacriticsEnabled ? 'が' : 'か'}
    </RoundButton>

    <RoundButton
      onClick={handleSetIsDigraphEnabled}
      tooltip={isDigraphEnabled ? 'digraphs' : 'monographs'}
    >
      {isDigraphEnabled ? '二' : '一'}
    </RoundButton>
    <RoundButton tooltip="kana table" onClick={toggleKanaTable}>
      <RiBookLine />
    </RoundButton>
  </Container>
);

export default ButtonsContainer;
