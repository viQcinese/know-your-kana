import React from 'react';
import { IKanaControlRows } from '../../utils/kanaControl';
import Checkbox from './components/Checkbox';

import { Table, Modal, Kana, ShadowOverlay } from './styles';

interface IKanaTable {
  isKatakana: boolean;
  hiraganaControlRows: IKanaControlRows;
  katakanaControlRows: IKanaControlRows;
  setHiraganaControlRows: React.Dispatch<
    React.SetStateAction<IKanaControlRows>
  >;
  setKatakanaControlRows: React.Dispatch<
    React.SetStateAction<IKanaControlRows>
  >;
  display: boolean;
  toggleKanaTable: any;
}

const KanaTable: React.FC<IKanaTable> = ({
  isKatakana,
  hiraganaControlRows,
  setHiraganaControlRows,
  katakanaControlRows,
  setKatakanaControlRows,
  display,
  toggleKanaTable,
}) => {
  return (
    <ShadowOverlay
      display={display}
      onClick={toggleKanaTable}
      id="shadow-overlay"
    >
      <Modal>
        <h1>Kana Table</h1>
        <Table id="kana-table">
          <Checkbox
            kanaRow="a"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="a">{!isKatakana ? 'あ' : 'ア'}</Kana>
          <Kana translation="i">{!isKatakana ? 'い' : 'イ'}</Kana>
          <Kana translation="u">{!isKatakana ? 'う' : 'ウ'}</Kana>
          <Kana translation="e">{!isKatakana ? 'え' : 'エ'}</Kana>
          <Kana translation="o">{!isKatakana ? 'お' : 'オ'}</Kana>

          <Checkbox
            kanaRow="k"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ka">{!isKatakana ? 'か' : 'カ'}</Kana>
          <Kana translation="ki">{!isKatakana ? 'き' : 'キ'}</Kana>
          <Kana translation="ku">{!isKatakana ? 'く' : 'ク'}</Kana>
          <Kana translation="ke">{!isKatakana ? 'け' : 'ケ'}</Kana>
          <Kana translation="ko">{!isKatakana ? 'こ' : 'コ'}</Kana>

          <Checkbox
            kanaRow="s"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="sa">{!isKatakana ? 'さ' : 'サ'}</Kana>
          <Kana translation="shi">{!isKatakana ? 'し' : 'シ'}</Kana>
          <Kana translation="su">{!isKatakana ? 'す' : 'ス'}</Kana>
          <Kana translation="se">{!isKatakana ? 'せ' : 'セ'}</Kana>
          <Kana translation="so">{!isKatakana ? 'そ' : 'ソ'}</Kana>

          <Checkbox
            kanaRow="t"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ta">{!isKatakana ? 'た' : 'タ'}</Kana>
          <Kana translation="chi">{!isKatakana ? 'ち' : 'チ'}</Kana>
          <Kana translation="tsu">{!isKatakana ? 'つ' : 'ツ'}</Kana>
          <Kana translation="te">{!isKatakana ? 'て' : 'テ'}</Kana>
          <Kana translation="to">{!isKatakana ? 'と' : 'ト'}</Kana>

          <Checkbox
            kanaRow="n"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />

          <Kana translation="na">{!isKatakana ? 'な' : 'ナ'}</Kana>
          <Kana translation="ni">{!isKatakana ? 'に' : 'ニ'}</Kana>
          <Kana translation="nu">{!isKatakana ? 'ぬ' : 'ヌ'}</Kana>
          <Kana translation="ne">{!isKatakana ? 'ね' : 'ネ'}</Kana>
          <Kana translation="no">{!isKatakana ? 'の' : 'ノ'}</Kana>

          <Checkbox
            kanaRow="h"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ha">{!isKatakana ? 'は' : 'ハ'}</Kana>
          <Kana translation="hi">{!isKatakana ? 'ひ' : 'ヒ'}</Kana>
          <Kana translation="fu">{!isKatakana ? 'ふ' : 'フ'}</Kana>
          <Kana translation="he">{!isKatakana ? 'へ' : 'ヘ'}</Kana>
          <Kana translation="ho">{!isKatakana ? 'ほ' : 'ホ'}</Kana>

          <Checkbox
            kanaRow="m"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ma">{!isKatakana ? 'ま' : 'マ'}</Kana>
          <Kana translation="mi">{!isKatakana ? 'み' : 'ミ'}</Kana>
          <Kana translation="mu">{!isKatakana ? 'む' : 'ム'}</Kana>
          <Kana translation="me">{!isKatakana ? 'め' : 'メ'}</Kana>
          <Kana translation="mo">{!isKatakana ? 'も' : 'モ'}</Kana>

          <Checkbox
            kanaRow="y"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ya">{!isKatakana ? 'や' : 'ヤ'}</Kana>
          <span>{!isKatakana ? '' : ''}</span>
          <Kana translation="yu">{!isKatakana ? 'ゆ' : 'ユ'}</Kana>
          <span>{!isKatakana ? '' : ''}</span>
          <Kana translation="yo">{!isKatakana ? 'よ' : 'ヨ'}</Kana>

          <Checkbox
            kanaRow="r"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="ra">{!isKatakana ? 'ら' : 'ラ'}</Kana>
          <Kana translation="ri">{!isKatakana ? 'り' : 'リ'}</Kana>
          <Kana translation="ru">{!isKatakana ? 'る' : 'ル'}</Kana>
          <Kana translation="re">{!isKatakana ? 'れ' : 'レ'}</Kana>
          <Kana translation="ro">{!isKatakana ? 'ろ' : 'ロ'}</Kana>

          <Checkbox
            kanaRow="w"
            kanaControlRows={
              isKatakana ? katakanaControlRows : hiraganaControlRows
            }
            setKanaControlRows={
              isKatakana ? setKatakanaControlRows : setHiraganaControlRows
            }
          />
          <Kana translation="wa">{!isKatakana ? 'わ' : 'ワ'}</Kana>
          <span>{!isKatakana ? '' : ''}</span>
          <Kana translation="n">{!isKatakana ? 'ん' : 'ン'}</Kana>
          <span>{!isKatakana ? '' : ''}</span>
          <Kana translation="wo">{!isKatakana ? 'を' : 'ヲ'}</Kana>
        </Table>
      </Modal>
    </ShadowOverlay>
  );
};

export default KanaTable;
