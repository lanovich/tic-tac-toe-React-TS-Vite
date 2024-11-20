import { InformationLayout } from "./InformationLayout"

interface InformationProps {
  currentPlayer: 'X' | 'O';
  isGameEnded: boolean;
  isDraw: boolean;
}

export const Information: React.FC<InformationProps> = ({ currentPlayer, isGameEnded, isDraw }) => {


  
  return (
    <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw}></InformationLayout>
  )
}