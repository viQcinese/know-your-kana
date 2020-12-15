import React from 'react';

import { Display } from './styles';

interface IKanaDisplay {
  kanaList: string[];
}

const KanaDisplay: React.FC<IKanaDisplay> = ({ kanaList }) => (
  <Display>{kanaList[0]}</Display>
);

export default KanaDisplay;
