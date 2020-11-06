/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useRef, useState } from 'react';

import shuffle from '../../utils/arrayShuffle';

import { Container, Input, KanaDisplay, Score } from './styles';

import {hiragana, composedHiragana, katakana, composedKatakana, hiraganaKeyMap, katakanaKeyMap} from '../../utils/kana'

interface GamePanelProps {
  focus: boolean;
  kanaType: string;
  isComposedKana: boolean;
}

const GamePanel: React.FC<GamePanelProps> = ({ focus, kanaType, isComposedKana }) => {
  const [kanaList, setKanaList] = useState(() => {
    const array = [...hiragana];
    const shuffled = shuffle(array);
    return shuffled;
  });

  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [keyMap, setKeyMap] = useState({} as {[key: string]: string})

  const inputRef = useRef<HTMLInputElement>(null)

  // Input Focus
  useEffect(() => {
    inputRef.current?.focus()
  }, [focus])

  // Handle KanaType Change
  useEffect(() => {
    setKanaList(() => buildKanaList())

    if (kanaType === "hiragana") {
      setKeyMap(hiraganaKeyMap)
    } else if (kanaType === "katakana") {
      setKeyMap(katakanaKeyMap)
    }
  }, [kanaType])

  // Handle ComposedKana Change
  useEffect(() => {
    setKanaList(() => buildKanaList())
  }, [isComposedKana])

  // BuildKanaList
  const buildKanaList = useCallback((): any[] => {
    if (kanaType === "hiragana") {
      return isComposedKana
        ? shuffle([...hiragana, ...composedHiragana])
        : shuffle([...hiragana])

    } else if (kanaType === "katakana") {
      return isComposedKana
      ? shuffle([...katakana, composedKatakana])
      : shuffle([...katakana])

    } else return []
  }, [kanaType])

  // Update Displayed Kana
  const updateKana = useCallback(() => {
    if (kanaList.length > 1) {
      setKanaList(old => old.slice(1, old.length));
    } else {
      setKanaList(() => {
        const array = buildKanaList()
        return array
      });
    }
  }, [kanaList]);

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
    [input, updateKana, kanaList],
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
