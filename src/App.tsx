import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  hiraganaMonographs,
  hiraganaMonographDiacritics,
  hiraganaDigraphs,
  hiraganaDigraphDiacritics,
  katakanaMonographs,
  katakanaMonographDiacritics,
  katakanaDigraphs,
  katakanaDigraphDiacritics,
} from './utils/kanaArrays';
import {
  kanaControlRowsBase,
  buildKanaControl,
  hiraganaControlBase,
  katakanaControlBase,
  IKanaControl,
} from './utils/kanaControl';
import { hiraganaKeyMap, katakanaKeyMap } from './utils/kanaKeyMaps';
import shuffle from './utils/arrayShuffle';

import Title from './components/Title';
import ButtonsContainer from './components/ButtonsContainer';
import KanaTable from './components/KanaTable';

import { GlobalStyle, Container } from './styles/global';
import KanaDisplay from './components/KanaDisplay';
import UserInput from './components/UserInput';
import Score from './components/Score';

const Main: React.FC = () => {
  const [isKatakana, setIsKatakana] = useState<boolean>(false);
  const [isDigraphEnabled, setIsDigraphEnabled] = useState(false);
  const [isDiacriticsEnabled, setIsDiacriticsEnabled] = useState(false);
  const [kanaQueue, setKanaQueue] = useState(hiraganaMonographs);
  const [kanaKeyMap, setKanaKeyMap] = useState(hiraganaKeyMap);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [rightGuesses, setRightGuesses] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isKanaTableOpen, setIsKanaTableOpen] = useState(false);
  const [hiraganaControlRows, setHiraganaControlRows] = useState(() => {
    const fromLocalStorage = localStorage.getItem(
      '@knowyourkana:hiragana-rows',
    );
    return fromLocalStorage
      ? JSON.parse(fromLocalStorage)
      : kanaControlRowsBase;
  });
  const [katakanaControlRows, setKatakanaControlRows] = useState(() => {
    const fromLocalStorage = localStorage.getItem(
      '@knowyourkana:katakana-rows',
    );
    return fromLocalStorage
      ? JSON.parse(fromLocalStorage)
      : kanaControlRowsBase;
  });

  const hiraganaControl: IKanaControl = useMemo(() => {
    return buildKanaControl({
      kanaControl: hiraganaControlBase,
      kanaControlRows: hiraganaControlRows,
      isKatakana,
    });
  }, [isKatakana, hiraganaControlRows]);

  const katakanaControl: IKanaControl = useMemo(() => {
    return buildKanaControl({
      kanaControl: katakanaControlBase,
      kanaControlRows: katakanaControlRows,
      isKatakana,
    });
  }, [isKatakana, katakanaControlRows]);

  const inputRef = useRef<HTMLInputElement>(null);

  const buildKanaQueue = useCallback(() => {
    let newQueue: string[] = [];

    if (isKatakana) {
      newQueue = newQueue.concat(katakanaMonographs);
      if (isDigraphEnabled && isDiacriticsEnabled) {
        newQueue = newQueue.concat(katakanaDigraphs);
        newQueue = newQueue.concat(katakanaDigraphDiacritics);
        newQueue = newQueue.concat(katakanaMonographDiacritics);
      } else if (isDigraphEnabled && !isDiacriticsEnabled) {
        newQueue = newQueue.concat(katakanaDigraphs);
      } else if (!isDigraphEnabled && isDiacriticsEnabled) {
        newQueue = newQueue.concat(katakanaMonographDiacritics);
      }

      newQueue = newQueue.filter(kana => katakanaControl[kana]);
    }

    if (!isKatakana) {
      newQueue = newQueue.concat(hiraganaMonographs);
      if (isDigraphEnabled && isDiacriticsEnabled) {
        newQueue = newQueue.concat(hiraganaDigraphs);
        newQueue = newQueue.concat(hiraganaDigraphDiacritics);
        newQueue = newQueue.concat(hiraganaMonographDiacritics);
      } else if (isDigraphEnabled && !isDiacriticsEnabled) {
        newQueue = newQueue.concat(hiraganaDigraphs);
      } else if (!isDigraphEnabled && isDiacriticsEnabled) {
        newQueue = newQueue.concat(hiraganaMonographDiacritics);
      }

      newQueue = newQueue.filter(kana => hiraganaControl[kana]);
    }

    return shuffle(newQueue);
  }, [
    isKatakana,
    isDigraphEnabled,
    isDiacriticsEnabled,
    hiraganaControl,
    katakanaControl,
  ]);

  const updateKanaQueue = useCallback(() => {
    if (kanaQueue.length > 1) {
      setKanaQueue(old =>
        kanaKeyMap[inputValue] === kanaQueue[0] ? [...old].slice(1) : old,
      );
    } else {
      setKanaQueue(buildKanaQueue);
    }
  }, [kanaKeyMap, inputValue, kanaQueue, buildKanaQueue]);

  const updateScore = useCallback(() => {
    setTotalGuesses(old => old + 1);
    setRightGuesses(old =>
      kanaKeyMap[inputValue] === kanaQueue[0] ? old + 1 : old,
    );
  }, [kanaQueue, kanaKeyMap, inputValue]);

  const handleSetIsKatakana = useCallback(() => {
    setIsKatakana(old => !old);
  }, []);

  const handleSetIsDiacriticsEnabled = useCallback(() => {
    setIsDiacriticsEnabled(old => !old);
  }, []);

  const handleSetIsDigraphEnabled = useCallback(() => {
    setIsDigraphEnabled(old => !old);
  }, []);

  const handleSetinputValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value.toLocaleLowerCase());
    },
    [],
  );

  const handleUserGuess = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!inputValue) return;
      updateScore();
      updateKanaQueue();
      setInputValue('');
    },
    [inputValue, updateScore, updateKanaQueue],
  );

  const handleInputFocus = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    inputRef.current?.focus();
  }, []);

  const toggleKanaTable = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      const target = event.target as HTMLDivElement | HTMLButtonElement;
      if (target.id === 'shadow-overlay') {
        setIsKanaTableOpen(false);
      } else {
        setIsKanaTableOpen(true);
      }
    },
    [],
  );

  useEffect(() => {
    setKanaQueue(buildKanaQueue);
  }, [
    buildKanaQueue,
    isKatakana,
    isDigraphEnabled,
    hiraganaControl,
    katakanaControl,
  ]);

  useEffect(() => {
    setKanaKeyMap(isKatakana ? katakanaKeyMap : hiraganaKeyMap);
  }, [isKatakana]);

  useEffect(() => {
    const stringified = JSON.stringify(hiraganaControlRows);
    localStorage.setItem('@knowyourkana:hiragana-rows', stringified);
  }, [hiraganaControlRows]);

  useEffect(() => {
    const stringified = JSON.stringify(katakanaControlRows);
    localStorage.setItem('@knowyourkana:katakana-rows', stringified);
  }, [katakanaControlRows]);

  return (
    <>
      <GlobalStyle />
      <KanaTable
        display={isKanaTableOpen}
        isKatakana={isKatakana}
        toggleKanaTable={toggleKanaTable}
        hiraganaControlRows={hiraganaControlRows}
        katakanaControlRows={katakanaControlRows}
        setHiraganaControlRows={setHiraganaControlRows}
        setKatakanaControlRows={setKatakanaControlRows}
      />

      <Container onClick={handleInputFocus}>
        <Title />

        <ButtonsContainer
          handleSetIsKatakana={handleSetIsKatakana}
          isKatakana={isKatakana}
          handleSetIsDigraphEnabled={handleSetIsDigraphEnabled}
          isDigraphEnabled={isDigraphEnabled}
          handleSetIsDiacriticsEnabled={handleSetIsDiacriticsEnabled}
          isDiacriticsEnabled={isDiacriticsEnabled}
          toggleKanaTable={toggleKanaTable}
        />

        <KanaDisplay kanaQueue={kanaQueue} />

        <UserInput
          value={inputValue}
          onChange={handleSetinputValue}
          onSubmit={handleUserGuess}
          inputRef={inputRef}
        />

        <Score attempts={totalGuesses} score={rightGuesses} />
      </Container>
    </>
  );
};

export default Main;
