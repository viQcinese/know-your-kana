import React, { useCallback, useState } from 'react';

import { RiBookLine } from 'react-icons/ri'

import GamePanel from '../../components/GamePanel';

import { ButtonsContainer, Container, Title, Button } from './styles';

const kanaTypeText = {
  hiragana: "あ",
  katakana: "カ",
} as {[key: string]: string}

const Main: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [kanaType, setKanaType] = useState("hiragana")
  const [isComposedKana, setIsComposedKana] = useState(false)

  // Handle Input Focus
  const handleInputFocus = useCallback((e) => {
    setInputFocus(old => !old)
  }, []);

  // Handle Input Blur
  const handleInputBlur = useCallback((e) => {
    setInputFocus(false)
  }, [])

  // Handle Set Kana Type
  const handleSetKanaType = useCallback(() => {
    if (kanaType === "hiragana") {
      setKanaType("katakana")
    } else {
      setKanaType("hiragana")
    }
  }, [kanaType])

  // Handle Set Composed Kana
  const handleSetComposedKana = useCallback(() => {
    setIsComposedKana(old => !old)
  }, [isComposedKana])

  return (
    <Container onClick={handleInputFocus}>
      <Title>know your kana</Title>

      <ButtonsContainer onClick={handleInputBlur}>
        <Button onClick={handleSetKanaType}>
          {kanaTypeText[kanaType]}
        </Button>

        <Button onClick={handleSetComposedKana}>
          {isComposedKana ? "二" : "一"}
        </Button>
        <Button>
          <RiBookLine />
        </Button>
      </ButtonsContainer >

      <GamePanel focus={inputFocus} kanaType={kanaType} isComposedKana={isComposedKana}/>
    </Container>
  );
};

export default Main;
