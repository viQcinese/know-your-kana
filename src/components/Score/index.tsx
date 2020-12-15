import React from 'react';

import { ScoreDisplay } from './styles';

interface IScore {
  score: number;
  attempts: number;
}

const Score: React.FC<IScore> = ({ attempts, score }) => (
  <ScoreDisplay>{`${score} / ${attempts}`}</ScoreDisplay>
);

export default Score;
