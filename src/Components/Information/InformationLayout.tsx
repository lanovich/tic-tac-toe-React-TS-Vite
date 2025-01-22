import styles from './Information.module.css';

interface InformationLayoutProps {
  currentPlayer: 'X' | 'O';
  isGameEnded: boolean;
  isDraw: boolean;
}

export const InformationLayout: React.FC<InformationLayoutProps> = ({
  currentPlayer,
  isGameEnded,
  isDraw,
}) => {
  return (
    <div
      className={`${styles.Information} ${
        isDraw ? styles.draw : isGameEnded ? styles.win : ''
      }`}
    >
      {isDraw
        ? 'Ничья'
        : isGameEnded
        ? `Победил ${currentPlayer === "X" ? "O" : "X"}`
        : `Ходит ${currentPlayer}`}
    </div>
  );
};
