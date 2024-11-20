import React from 'react';
import styles from './Game.module.css';
import { Field, Information } from './index';

interface GameLayoutProps {
  currentPlayer: 'X' | 'O';
  field: string[];
  isGameEnded: boolean;
  isDraw: boolean;
  makeMove: (index: number) => void;
  restartGame: () => void;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ currentPlayer, field, isGameEnded, isDraw, makeMove, restartGame }) => {


  return (
    <div className={styles.mainContainer}>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field field={field} makeMove={makeMove} />
      <button onClick={restartGame}>Restart</button>
    </div>
  )
}
