import React from 'react';
import { IKanaControlBlocks } from '../../utils/kanaControl';
import Checkbox from './Checkbox';

import { Table, Modal, Kana } from './styles';

interface IKanaTable {
  kanaType: string;
  kanaControlBlocks: IKanaControlBlocks;
  handleSetKanaControlBlocks: (
    newKanaControlBlocks: IKanaControlBlocks,
  ) => void;
}

const KanaTable: React.FC<IKanaTable> = ({
  kanaType,
  kanaControlBlocks,
  handleSetKanaControlBlocks,
}) => {
  return (
    <Modal>
      <h1>Kana Table</h1>
      <Table id="kana-table">
        <Checkbox
          kanaRow="a"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="a">{kanaType === 'hiragana' ? 'あ' : 'ア'}</Kana>
        <Kana translation="i">{kanaType === 'hiragana' ? 'い' : 'イ'}</Kana>
        <Kana translation="u">{kanaType === 'hiragana' ? 'う' : 'ウ'}</Kana>
        <Kana translation="e">{kanaType === 'hiragana' ? 'え' : 'エ'}</Kana>
        <Kana translation="o">{kanaType === 'hiragana' ? 'お' : 'オ'}</Kana>

        <Checkbox
          kanaRow="k"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ka">{kanaType === 'hiragana' ? 'か' : 'カ'}</Kana>
        <Kana translation="ki">{kanaType === 'hiragana' ? 'き' : 'キ'}</Kana>
        <Kana translation="ku">{kanaType === 'hiragana' ? 'く' : 'ク'}</Kana>
        <Kana translation="ke">{kanaType === 'hiragana' ? 'け' : 'ケ'}</Kana>
        <Kana translation="ko">{kanaType === 'hiragana' ? 'こ' : 'コ'}</Kana>

        <Checkbox
          kanaRow="s"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="sa">{kanaType === 'hiragana' ? 'さ' : 'サ'}</Kana>
        <Kana translation="shi">{kanaType === 'hiragana' ? 'し' : 'シ'}</Kana>
        <Kana translation="su">{kanaType === 'hiragana' ? 'す' : 'ス'}</Kana>
        <Kana translation="se">{kanaType === 'hiragana' ? 'せ' : 'セ'}</Kana>
        <Kana translation="so">{kanaType === 'hiragana' ? 'そ' : 'ソ'}</Kana>

        <Checkbox
          kanaRow="t"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ta">{kanaType === 'hiragana' ? 'た' : 'タ'}</Kana>
        <Kana translation="chi">{kanaType === 'hiragana' ? 'ち' : 'チ'}</Kana>
        <Kana translation="tsu">{kanaType === 'hiragana' ? 'つ' : 'ツ'}</Kana>
        <Kana translation="te">{kanaType === 'hiragana' ? 'て' : 'テ'}</Kana>
        <Kana translation="to">{kanaType === 'hiragana' ? 'と' : 'ト'}</Kana>

        <Checkbox
          kanaRow="n"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />

        <Kana translation="na">{kanaType === 'hiragana' ? 'な' : 'ナ'}</Kana>
        <Kana translation="ni">{kanaType === 'hiragana' ? 'に' : 'ニ'}</Kana>
        <Kana translation="nu">{kanaType === 'hiragana' ? 'ぬ' : 'ヌ'}</Kana>
        <Kana translation="ne">{kanaType === 'hiragana' ? 'ね' : 'ネ'}</Kana>
        <Kana translation="no">{kanaType === 'hiragana' ? 'の' : 'ノ'}</Kana>

        <Checkbox
          kanaRow="h"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ha">{kanaType === 'hiragana' ? 'は' : 'ハ'}</Kana>
        <Kana translation="hi">{kanaType === 'hiragana' ? 'ひ' : 'ヒ'}</Kana>
        <Kana translation="fu">{kanaType === 'hiragana' ? 'ふ' : 'フ'}</Kana>
        <Kana translation="he">{kanaType === 'hiragana' ? 'へ' : 'ヘ'}</Kana>
        <Kana translation="ho">{kanaType === 'hiragana' ? 'ほ' : 'ホ'}</Kana>

        <Checkbox
          kanaRow="m"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ma">{kanaType === 'hiragana' ? 'ま' : 'マ'}</Kana>
        <Kana translation="mi">{kanaType === 'hiragana' ? 'み' : 'ミ'}</Kana>
        <Kana translation="mu">{kanaType === 'hiragana' ? 'む' : 'ム'}</Kana>
        <Kana translation="me">{kanaType === 'hiragana' ? 'め' : 'メ'}</Kana>
        <Kana translation="mo">{kanaType === 'hiragana' ? 'も' : 'モ'}</Kana>

        <Checkbox
          kanaRow="y"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ya">{kanaType === 'hiragana' ? 'や' : 'ヤ'}</Kana>
        <span>{kanaType === 'hiragana' ? '' : ''}</span>
        <Kana translation="yu">{kanaType === 'hiragana' ? 'ゆ' : 'ユ'}</Kana>
        <span>{kanaType === 'hiragana' ? '' : ''}</span>
        <Kana translation="yo">{kanaType === 'hiragana' ? 'よ' : 'ヨ'}</Kana>

        <Checkbox
          kanaRow="r"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="ra">{kanaType === 'hiragana' ? 'ら' : 'ラ'}</Kana>
        <Kana translation="ri">{kanaType === 'hiragana' ? 'り' : 'リ'}</Kana>
        <Kana translation="ru">{kanaType === 'hiragana' ? 'る' : 'ル'}</Kana>
        <Kana translation="re">{kanaType === 'hiragana' ? 'れ' : 'レ'}</Kana>
        <Kana translation="ro">{kanaType === 'hiragana' ? 'ろ' : 'ロ'}</Kana>

        <Checkbox
          kanaRow="w"
          kanaControlBlocks={kanaControlBlocks}
          handleSetKanaControlBlocks={handleSetKanaControlBlocks}
        />
        <Kana translation="wa">{kanaType === 'hiragana' ? 'わ' : 'ワ'}</Kana>
        <span>{kanaType === 'hiragana' ? '' : ''}</span>
        <Kana translation="n">{kanaType === 'hiragana' ? 'ん' : 'ン'}</Kana>
        <span>{kanaType === 'hiragana' ? '' : ''}</span>
        <Kana translation="wo">{kanaType === 'hiragana' ? 'を' : 'ヲ'}</Kana>
      </Table>
    </Modal>
  );
};

export default KanaTable;
