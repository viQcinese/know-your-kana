/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useRef, useState } from 'react';

import shuffle from '../../utils/arrayShuffle';

import Score from '../Score';
import KanaDisplay from '../KanaDisplay';
import UserInput from '../UserInput';

import { Container } from './styles';

import {
  hiraganaMonographs,
  hiraganaDigraphs,
  katakanaMonographs,
  katakanaDigraphs,
} from '../../utils/kanaArrays';

import { hiraganaKeyMap, katakanaKeyMap } from '../../utils/kanaKeyMaps';

interface GamePanelProps {
  focus: boolean;
  kanaType: string;
  isComposedKana: boolean;
  kanaControl: {
    [key: string]: boolean;
  };
}

const GamePanel: React.FC<GamePanelProps> = ({
  focus,
  kanaType,
  isComposedKana,
  kanaControl,
}) => {
  const [kanaList, setKanaList] = useState(() => {
    const kanaArray =
      kanaType === 'hiragana'
        ? [...hiraganaMonographs]
        : [...katakanaMonographs];
    const shuffledKanaArray = shuffle(kanaArray);
    return shuffledKanaArray;
  });
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [keyMap, setKeyMap] = useState(() => {
    return kanaType === 'hiragana' ? hiraganaKeyMap : katakanaKeyMap;
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // BuildKanaList
  const buildKanaList = useCallback((): string[] => {
    if (kanaType === 'hiragana') {
      const unfilteredKanaList = isComposedKana
        ? shuffle([...hiraganaMonographs, ...hiraganaDigraphs])
        : shuffle([...hiraganaMonographs]);
      return unfilteredKanaList.filter(e => kanaControl[e]);
    }

    if (kanaType === 'katakana') {
      const unfilteredKanaList = isComposedKana
        ? shuffle([...katakanaMonographs, ...katakanaDigraphs])
        : shuffle([...katakanaMonographs]);
      return unfilteredKanaList.filter(e => kanaControl[e]);
    }

    return [];
  }, [kanaType, isComposedKana, kanaControl]);

  // Input Focus when Focus state change
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    inputRef.current?.focus();
  }, [focus]);

  // Handle KanaType Change
  useEffect(() => {
    setKanaList(() => buildKanaList());

    if (kanaType === 'hiragana') {
      setKeyMap(hiraganaKeyMap);
    } else if (kanaType === 'katakana') {
      setKeyMap(katakanaKeyMap);
    }
  }, [kanaType, buildKanaList]);

  // Handle ComposedKana Change
  useEffect(() => {
    setKanaList(() => buildKanaList());
  }, [isComposedKana, buildKanaList]);

  // Update Displayed Kana
  const updateKana = useCallback(() => {
    if (kanaList.length > 1) {
      setKanaList(old => old.slice(1, old.length));
    } else {
      setKanaList(() => {
        const array = buildKanaList();
        return array;
      });
    }
  }, [kanaList, buildKanaList]);

  // Handle Input Submit
  const handleSubmit = useCallback(
    e => {
      // Nothing written
      if (input === '') return;

      // Submit
      if (e.keyCode === 13) {
        if (keyMap[input] === kanaList[0]) {
          setScore(old => old + 1);
          updateKana();
        }
        setAttempts(old => old + 1);
        setInput('');
      }
    },
    [input, updateKana, kanaList, keyMap],
  );

  // Handle Input Change
  const handleInputChange = useCallback(e => {
    setInput(e.target.value.toLowerCase());
  }, []);

  return (
    <Container>
      <KanaDisplay kanaList={kanaList} />

      <UserInput
        inputRef={inputRef}
        inputValue={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Score score={score} attempts={attempts} />
    </Container>
  );
};

export default GamePanel;
