import { useState } from 'react';
import { GameLayout } from './GameLayout';

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<'X'|'O'>('X');
  const [field, setField] = useState<Array<string>>(Array(9).fill(''));
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

  const checkWin = (patterns: Array<Array<number>>) => {
    if (!field.includes('')) {
      setIsDraw(true);
      setIsGameEnded(true);
    }
    
    for (const pattern of patterns) {
      if (field[pattern[0]] && field[pattern[0]] === field[pattern[1]] && field[pattern[1]] === field[pattern[2]]) {
        setIsGameEnded(true);
        return setCurrentPlayer(currentPlayer);
      }
    }
  } 

  const makeMove = (index: number) => {
    if (field[index] === '' && !isGameEnded) {
      field[index] = currentPlayer;
      const newField = [...field];
      setField(newField);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWin(WIN_PATTERNS);
    }
  }

  const restartGame = () => {
    setCurrentPlayer('X')
    setField(Array(9).fill(''))
    setIsGameEnded(false)
    setIsDraw(false)
  }

  return (
    <>
      <GameLayout currentPlayer={currentPlayer} field={field} isGameEnded={isGameEnded} isDraw={isDraw} makeMove={makeMove} restartGame={restartGame} />
    </>
  )
}

export default Game
