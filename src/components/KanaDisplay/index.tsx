import React from 'react';

import { Display } from './styles';

interface IKanaDisplay {
  kanaQueue: string[];
}

const KanaDisplay: React.FC<IKanaDisplay> = ({ kanaQueue }) => (
  <Display>{kanaQueue[0]}</Display>
);

export default KanaDisplay;
