export const hiraganaControlBase = {
  あ: true,
  え: true,
  い: true,
  お: true,
  う: true,
  か: true,
  け: true,
  き: true,
  こ: true,
  く: true,
  さ: true,
  せ: true,
  し: true,
  そ: true,
  す: true,
  た: true,
  て: true,
  ち: true,
  と: true,
  つ: true,
  な: true,
  ね: true,
  に: true,
  の: true,
  ぬ: true,
  は: true,
  へ: true,
  ひ: true,
  ほ: true,
  ふ: true,
  ま: true,
  め: true,
  み: true,
  も: true,
  む: true,
  や: true,
  よ: true,
  ゆ: true,
  ら: true,
  れ: true,
  り: true,
  ろ: true,
  る: true,
  わ: true,
  を: true,
  が: true,
  げ: true,
  ぎ: true,
  ご: true,
  ぐ: true,
  ざ: true,
  ぜ: true,
  じ: true,
  ぞ: true,
  ず: true,
  だ: true,
  で: true,
  ぢ: true,
  ど: true,
  づ: true,
  ば: true,
  べ: true,
  び: true,
  ぼ: true,
  ぶ: true,
  ぱ: true,
  ぺ: true,
  ぴ: true,
  ぽ: true,
  ぷ: true,
  ん: true,
  きゃ: true,
  きゅ: true,
  きょ: true,
  しゃ: true,
  しゅ: true,
  しょ: true,
  ちゃ: true,
  ちゅ: true,
  ちょ: true,
  ひゃ: true,
  ひゅ: true,
  ひょ: true,
  みゃ: true,
  みゅ: true,
  みょ: true,
  りゃ: true,
  りゅ: true,
  りょ: true,
  ぎゃ: true,
  ぎゅ: true,
  ぎょ: true,
  じゃ: true,
  じゅ: true,
  じょ: true,
  にゃ: true,
  にゅ: true,
  にょ: true,
  びゃ: true,
  びゅ: true,
  びょ: true,
  ぴゃ: true,
  ぴゅ: true,
  ぴょ: true,
};

export const katakanaControlBase = {
  ア: true,
  エ: true,
  イ: true,
  オ: true,
  ウ: true,
  カ: true,
  ケ: true,
  キ: true,
  コ: true,
  ク: true,
  サ: true,
  セ: true,
  シ: true,
  ソ: true,
  ス: true,
  タ: true,
  テ: true,
  チ: true,
  ト: true,
  ツ: true,
  ナ: true,
  ネ: true,
  ニ: true,
  ノ: true,
  ヌ: true,
  ハ: true,
  ヘ: true,
  ヒ: true,
  ホ: true,
  フ: true,
  マ: true,
  メ: true,
  ミ: true,
  モ: true,
  ム: true,
  ヤ: true,
  ヨ: true,
  ユ: true,
  ラ: true,
  レ: true,
  リ: true,
  ロ: true,
  ル: true,
  ワ: true,
  ヲ: true,
  ガ: true,
  ゲ: true,
  ギ: true,
  ゴ: true,
  グ: true,
  ザ: true,
  ゼ: true,
  ジ: true,
  ゾ: true,
  ズ: true,
  ダ: true,
  デ: true,
  ヂ: true,
  ド: true,
  ヅ: true,
  バ: true,
  ベ: true,
  ビ: true,
  ボ: true,
  ブ: true,
  パ: true,
  ペ: true,
  ピ: true,
  ポ: true,
  プ: true,
  ン: true,
  キャ: true,
  キュ: true,
  キョ: true,
  シャ: true,
  シュ: true,
  ショ: true,
  チャ: true,
  チュ: true,
  チョ: true,
  ヒャ: true,
  ヒュ: true,
  ヒョ: true,
  ミャ: true,
  ミュ: true,
  ミョ: true,
  リャ: true,
  リュ: true,
  リョ: true,
  ギャ: true,
  ギュ: true,
  ギョ: true,
  ジャ: true,
  ジュ: true,
  ジョ: true,
  ニャ: true,
  ニュ: true,
  ニョ: true,
  ビャ: true,
  ビュ: true,
  ビョ: true,
  ピャ: true,
  ピュ: true,
  ピョ: true,
};

export interface IKanaControlRows {
  a: boolean;
  k: boolean;
  s: boolean;
  t: boolean;
  n: boolean;
  h: boolean;
  m: boolean;
  y: boolean;
  r: boolean;
  w: boolean;
}

export const kanaControlRowsBase = {
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

export interface IKanaControl {
  [key: string]: boolean;
}

interface IBuildKanaControl {
  kanaControlRows: IKanaControlRows;
  kanaControl: IKanaControl;
  isKatakana: boolean;
}

export const buildKanaControl = ({
  kanaControlRows,
  kanaControl,
  isKatakana,
}: IBuildKanaControl): IKanaControl => {
  const newKanaControl = JSON.parse(JSON.stringify(kanaControl));

  if (!isKatakana) {
    ['あ', 'い', 'う', 'え', 'お'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.a;
    });

    [
      'か',
      'き',
      'く',
      'け',
      'こ',
      'が',
      'ぎ',
      'ぐ',
      'げ',
      'ご',
      'きゃ',
      'きゅ',
      'きょ',
      'ぎゃ',
      'ぎゅ',
      'ぎょ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.k;
    });

    [
      'さ',
      'し',
      'す',
      'せ',
      'そ',
      'ざ',
      'じ',
      'ず',
      'ぜ',
      'ぞ',
      'しゃ',
      'しゅ',
      'しょ',
      'じゃ',
      'じゅ',
      'じょ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.s;
    });

    [
      'た',
      'ち',
      'つ',
      'て',
      'と',
      'だ',
      'ぢ',
      'づ',
      'で',
      'ど',
      'ちゃ',
      'ちゅ',
      'ちょ',
      'ぢゃ',
      'ぢゅ',
      'ぢょ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.t;
    });

    ['な', 'に', 'ぬ', 'ね', 'の', 'にゃ', 'にゅ', 'にょ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.n;
    });

    [
      'は',
      'ひ',
      'ふ',
      'へ',
      'ほ',
      'ば',
      'び',
      'ぶ',
      'べ',
      'ぼ',
      'ぱ',
      'ぴ',
      'ぷ',
      'ぺ',
      'ぽ',
      'ひゃ',
      'ひゅ',
      'ひょ',
      'びゃ',
      'びゅ',
      'びょ',
      'ぴゃ',
      'ぴゅ',
      'ぴょ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.h;
    });

    ['ま', 'み', 'む', 'め', 'も', 'みゃ', 'みゅ', 'みょ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.m;
    });

    ['や', 'ゆ', 'よ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.y;
    });

    ['ら', 'り', 'る', 'れ', 'ろ', 'りゃ', 'りゅ', 'りょ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.r;
    });

    ['わ', 'ん', 'を'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.w;
    });
  }

  if (isKatakana) {
    ['ア', 'イ', 'ウ', 'エ', 'オ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.a;
    });

    [
      'カ',
      'キ',
      'ク',
      'ケ',
      'コ',
      'ガ',
      'ギ',
      'グ',
      'ゲ',
      'ゴ',
      'キャ',
      'キュ',
      'キョ',
      'ギャ',
      'ギュ',
      'ギョ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.k;
    });

    [
      'サ',
      'シ',
      'ス',
      'セ',
      'ソ',
      'ザ',
      'ジ',
      'ズ',
      'ゼ',
      'ゾ',
      'シャ',
      'シュ',
      'ショ',
      'ジャ',
      'ジュ',
      'ジョ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.s;
    });

    [
      'タ',
      'チ',
      'ツ',
      'テ',
      'ト',
      'ダ',
      'ヂ',
      'ヅ',
      'デ',
      'ド',
      'チャ',
      'チュ',
      'チョ',
      'ヂャ',
      'ヂュ',
      'ヂョ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.t;
    });

    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ニャ', 'ニュ', 'ニョ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.n;
    });

    [
      'ハ',
      'ヒ',
      'フ',
      'ヘ',
      'ホ',
      'バ',
      'ビ',
      'ブ',
      'ベ',
      'ボ',
      'パ',
      'ピ',
      'プ',
      'ペ',
      'ポ',
      'ヒャ',
      'ヒュ',
      'ヒョ',
      'ビャ',
      'ビュ',
      'ビョ',
      'ピャ',
      'ピュ',
      'ピョ',
    ].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.h;
    });

    ['マ', 'ミ', 'ム', 'メ', 'モ', 'ミャ', 'ミュ', 'ミョ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.m;
    });

    ['ヤ', 'ユ', 'ヨ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.y;
    });

    ['ラ', 'リ', 'ル', 'レ', 'ロ', 'リャ', 'リュ', 'リョ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.r;
    });

    ['ワ', 'ン', 'ヲ'].forEach(kana => {
      newKanaControl[kana] = kanaControlRows.w;
    });
  }

  return newKanaControl;
};
