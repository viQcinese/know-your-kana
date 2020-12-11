/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useRef, useState } from 'react';

import shuffle from '../../utils/arrayShuffle';

import { Container, Input, KanaDisplay, Score } from './styles';

import {
  hiragana,
  composedHiragana,
  katakana,
  composedKatakana,
  hiraganaKeyMap,
  katakanaKeyMap,
} from '../../utils/kana';

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
    const kanaArray = kanaType === 'hiragana' ? [...hiragana] : [...katakana];
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
        ? shuffle([...hiragana, ...composedHiragana])
        : shuffle([...hiragana]);
      return unfilteredKanaList.filter(e => kanaControl[e]);
    }

    if (kanaType === 'katakana') {
      const unfilteredKanaList = isComposedKana
        ? shuffle([...katakana, ...composedKatakana])
        : shuffle([...katakana]);
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
    setInput(e.target.value);
  }, []);

  return (
    <Container>
      <KanaDisplay>{kanaList[0]}</KanaDisplay>
      <Input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
      />
      <Score>
        {score} / {attempts}
      </Score>
    </Container>
  );
};

export default GamePanel;
