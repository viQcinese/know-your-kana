import React, { useCallback, useEffect, useState } from 'react';

import { RiBookLine } from 'react-icons/ri'

import GamePanel from '../../components/GamePanel';
import RoundButton from '../../components/RoundButton'
import KanaTable from '../../components/KanaTable'

import { ButtonsContainer, Container, Title, Block } from './styles';

const kanaTypeText = {
  hiragana: "あ",
  katakana: "カ",
} as {[key: string]: string}

const Main: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [kanaType, setKanaType] = useState("hiragana")
  const [isComposedKana, setIsComposedKana] = useState(false)
  const [isCheatList, setIsCheatList] = useState(false)

  // Handle Input Focus
  const handleInputFocus = useCallback(() => {
    setInputFocus(old => !old)
  }, []);

  // Handle Input Blur
  const handleInputBlur = useCallback(() => {
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

  // Handle Toggle Cheat List
  const handleToggleCheatList = useCallback(() => {
    setIsCheatList(old => !old)
    handleInputBlur()
  }, [isCheatList])

  return (
    <Container onClick={handleInputFocus}>
      <Block display={isCheatList} onClick={handleToggleCheatList}>
        <KanaTable kanaType={kanaType}/>
      </Block>
      <Title>
        <b> know </b>
        your
        <b> kana </b>
      </Title>

      <ButtonsContainer>
        <RoundButton
          onClick={handleSetKanaType}
          legend={kanaType}
        >
          {kanaTypeText[kanaType]}
        </RoundButton>

        <RoundButton
          onClick={handleSetComposedKana}
          legend={isComposedKana ? "diacritics" : "monographs"}
        >
          {isComposedKana ? "二" : "一"}
        </RoundButton>
        <RoundButton
          legend={"kana table"}
          onClick={handleToggleCheatList}
        >
          <RiBookLine />
        </RoundButton>
      </ButtonsContainer >

      <GamePanel
        focus={inputFocus}
        kanaType={kanaType}
        isComposedKana={isComposedKana}
      />
    </Container>
  );
};

export default Main;
