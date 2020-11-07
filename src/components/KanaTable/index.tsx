import React from 'react'

import { Table } from './styles'

interface IKanaTable {
  kanaType: string;
}

const KanaTable: React.FC<IKanaTable> = ({ kanaType }) => {
  return (
    <Table>
      <tr>
        <td>{kanaType === 'hiragana' ? 'あ' : 'ア'}</td>
        <td>{kanaType === 'hiragana' ? 'い' : 'イ'}</td>
        <td>{kanaType === 'hiragana' ? 'う' : 'ウ'}</td>
        <td>{kanaType === 'hiragana' ? 'え' : 'エ'}</td>
        <td>{kanaType === 'hiragana' ? 'お' : 'オ'}</td>
      </tr>
      <tr>
        <td>{kanaType === 'hiragana' ? 'か' : 'カ'}</td>
        <td>{kanaType === 'hiragana' ? 'き' : 'キ'}</td>
        <td>{kanaType === 'hiragana' ? 'く' : 'ク'}</td>
        <td>{kanaType === 'hiragana' ? 'け' : 'ケ'}</td>
        <td>{kanaType === 'hiragana' ? 'こ' : 'コ'}</td>
      </tr>
      <tr>
        <td>{kanaType === 'hiragana' ? 'さ' : 'サ'}</td>
        <td>{kanaType === 'hiragana' ? 'し' : 'シ'}</td>
        <td>{kanaType === 'hiragana' ? 'す' : 'ス'}</td>
        <td>{kanaType === 'hiragana' ? 'せ' : 'セ'}</td>
        <td>{kanaType === 'hiragana' ? 'そ' : 'ソ'}</td>
      </tr>
      <tr>
        <td>{kanaType === 'hiragana' ? 'た' : 'タ'}</td>
        <td>{kanaType === 'hiragana' ? 'ち' : 'チ'}</td>
        <td>{kanaType === 'hiragana' ? 'つ' : 'ツ'}</td>
        <td>{kanaType === 'hiragana' ? 'て' : 'テ'}</td>
        <td>{kanaType === 'hiragana' ? 'と' : 'ト'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'な' : 'ナ'}</td>
        <td>{kanaType === 'hiragana' ? 'に' : 'ニ'}</td>
        <td>{kanaType === 'hiragana' ? 'ぬ' : 'ヌ'}</td>
        <td>{kanaType === 'hiragana' ? 'ね' : 'ネ'}</td>
        <td>{kanaType === 'hiragana' ? 'の' : 'ノ'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'は' : 'ハ'}</td>
        <td>{kanaType === 'hiragana' ? 'ひ' : 'ヒ'}</td>
        <td>{kanaType === 'hiragana' ? 'ふ' : 'フ'}</td>
        <td>{kanaType === 'hiragana' ? 'へ' : 'ヘ'}</td>
        <td>{kanaType === 'hiragana' ? 'ほ' : 'ホ'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'ま' : 'マ'}</td>
        <td>{kanaType === 'hiragana' ? 'み' : 'ミ'}</td>
        <td>{kanaType === 'hiragana' ? 'む' : 'ム'}</td>
        <td>{kanaType === 'hiragana' ? 'め' : 'メ'}</td>
        <td>{kanaType === 'hiragana' ? 'も' : 'モ'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'や' : 'ヤ'}</td>
        <td>{kanaType === 'hiragana' ? '' : ''}</td>
        <td>{kanaType === 'hiragana' ? 'ゆ' : 'ユ'}</td>
        <td>{kanaType === 'hiragana' ? '' : ''}</td>
        <td>{kanaType === 'hiragana' ? 'よ' : 'ヨ'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'ら' : 'ラ'}</td>
        <td>{kanaType === 'hiragana' ? 'り' : 'リ'}</td>
        <td>{kanaType === 'hiragana' ? 'る' : 'ル'}</td>
        <td>{kanaType === 'hiragana' ? 'れ' : 'レ'}</td>
        <td>{kanaType === 'hiragana' ? 'ろ' : 'ロ'}</td>
      </tr><tr>
        <td>{kanaType === 'hiragana' ? 'わ' : 'ワ'}</td>
        <td>{kanaType === 'hiragana' ? '' : ''}</td>
        <td>{kanaType === 'hiragana' ? 'ん' : 'ン'}</td>
        <td>{kanaType === 'hiragana' ? '' : ''}</td>
        <td>{kanaType === 'hiragana' ? 'を' : 'ヲ'}</td>
      </tr>
    </Table>
  )
}

export default KanaTable
