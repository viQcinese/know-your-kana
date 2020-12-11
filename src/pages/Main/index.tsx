import React, { useCallback, useEffect, useState } from 'react';

import { RiBookLine } from 'react-icons/ri';

import {
  buildKanaControl,
  hiraganaControl,
  katakanaControl,
  IKanaControlBlocks,
} from '../../utils/kanaControl';

import GamePanel from '../../components/GamePanel';
import RoundButton from '../../components/RoundButton';
import KanaTable from '../../components/KanaTable';

import { ButtonsContainer, Container, Title, ShadowOverlay } from './styles';

const Main: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [kanaType, setKanaType] = useState<'hiragana' | 'katakana'>('hiragana');
  const [isComposedKana, setIsComposedKana] = useState(false);
  const [isCheatList, setIsCheatList] = useState(false);
  const [kanaControl, setKanaControl] = useState<{ [key: string]: boolean }>(
    () => {
      return kanaType === 'hiragana' ? hiraganaControl : katakanaControl;
    },
  );
  const [kanaControlBlocks, setKanaControlBlocks] = useState<
    IKanaControlBlocks
  >(() => {
    const localStorageObject = localStorage.getItem(
      '@knowyourkana:kana-control-blocks',
    );

    if (localStorageObject) return JSON.parse(localStorageObject);

    return {
      a: true,
      k: false,
      s: false,
      t: false,
      n: false,
      h: false,
      m: false,
      y: false,
      r: false,
      w: false,
    };
  });

  // Manage Kana Control Changes
  useEffect(() => {
    const newKanaControl = buildKanaControl({
      kanaControl,
      kanaControlBlocks,
      kanaType,
    });

    setKanaControl(newKanaControl);
    // If kanaControl is in dependencies, infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kanaControlBlocks, kanaType]);

  // HandleSetKanaControlBlocks
  const handleSetKanaControlBlocks = useCallback(
    (newKanaControlBlocks: IKanaControlBlocks) => {
      localStorage.setItem(
        '@knowyourkana:kana-control-blocks',
        JSON.stringify(newKanaControlBlocks),
      );
      setKanaControlBlocks(newKanaControlBlocks);
    },
    [],
  );

  // Handle Input Focus
  const handleInputFocus = useCallback(() => {
    setInputFocus(old => !old);
  }, []);

  // Handle Set Kana Type
  const handleSetKanaType = useCallback(() => {
    if (kanaType === 'hiragana') {
      setKanaType('katakana');
      setKanaControl(katakanaControl);
    } else {
      setKanaType('hiragana');
      setKanaControl(hiraganaControl);
    }
  }, [kanaType]);

  // Handle Set Composed Kana
  const handleSetComposedKana = useCallback(() => {
    setIsComposedKana(old => !old);
  }, []);

  // Handle Toggle Cheat List
  const handleToggleCheatList = useCallback(
    e => {
      if (e.target.id === 'shadow-overlay') {
        setIsCheatList(false);
        setInputFocus(true);
      } else if (!isCheatList) {
        setIsCheatList(true);
        setInputFocus(false);
      }
    },
    [isCheatList],
  );

  return (
    <Container onClick={handleInputFocus}>
      <ShadowOverlay
        display={isCheatList}
        onClick={handleToggleCheatList}
        id="shadow-overlay"
      >
        <KanaTable
          kanaType={kanaType}
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
      </ShadowOverlay>
      <Title>
        <b> know </b>
        your
        <b> kana </b>
      </Title>

      <ButtonsContainer>
        <RoundButton onClick={handleSetKanaType} legend={kanaType}>
          {kanaType === 'hiragana' ? 'あ' : 'カ'}
        </RoundButton>

        <RoundButton
          onClick={handleSetComposedKana}
          legend={isComposedKana ? 'diacritics' : 'monographs'}
        >
          {isComposedKana ? '二' : '一'}
        </RoundButton>
        <RoundButton legend="kana table" onClick={handleToggleCheatList}>
          <RiBookLine />
        </RoundButton>
      </ButtonsContainer>

      <GamePanel
        focus={inputFocus}
        kanaType={kanaType}
        isComposedKana={isComposedKana}
        kanaControl={kanaControl}
      />
    </Container>
  );
};

export default Main;
