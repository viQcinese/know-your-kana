import React, { useCallback, useEffect, useState } from 'react';

import {
  buildKanaControl,
  hiraganaControl,
  katakanaControl,
  IKanaControlBlocks,
} from './utils/kanaControl';

import Title from './components/Title';
import ButtonsContainer from './components/ButtonsContainer';
import GamePanel from './components/GamePanel';
import KanaTable from './components/KanaTable';

import { GlobalStyle, Container } from './styles/global';

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
    <>
      <GlobalStyle />
      <Container onClick={handleInputFocus}>
        <Title />
        <KanaTable
          kanaType={kanaType}
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
          display={isCheatList}
          toggleKanaTable={handleToggleCheatList}
        />

        <ButtonsContainer
          handleSetKanaType={handleSetKanaType}
          kanaType={kanaType}
          handleSetComposedKana={handleSetComposedKana}
          isComposedKana={isComposedKana}
          handleToggleCheatList={handleToggleCheatList}
        />

        <GamePanel
          focus={inputFocus}
          kanaType={kanaType}
          isComposedKana={isComposedKana}
          kanaControl={kanaControl}
        />
      </Container>
    </>
  );
};

export default Main;
