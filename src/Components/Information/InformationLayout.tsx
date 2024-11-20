import styles from './Information.module.css'

interface InformationLayoutProps {
  currentPlayer: 'X' | 'O';
  isGameEnded: boolean;
  isDraw: boolean;
}

export const InformationLayout: React.FC<InformationLayoutProps> = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={`${styles.Information} ${isDraw && !isGameEnded ? styles.draw : isGameEnded ? styles.win : ''}`}>
      {isDraw && !isGameEnded ? 'Ничья' : isGameEnded ? `Победил ${currentPlayer}` : `Ходит ${currentPlayer}`}
    </div>
  )
}