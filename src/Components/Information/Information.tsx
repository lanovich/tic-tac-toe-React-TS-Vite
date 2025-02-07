import { Component } from "react";
import { AppState } from "../../types";
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from "../../selectors";
import { connect } from "react-redux";

interface InformationProps {
  currentPlayer: string;
  isGameEnded: boolean;
  isDraw: boolean;
}

class Information extends Component<InformationProps> {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    return (
      <div className={`font-bold text-[3vh] bg-[rgb(168,110,185)] shadow-[3px_3px_10px_0px_rgb(139,72,111)] m-[6%] p-[2%] rounded-[10px] ${isDraw ? "bg-[rgb(179,196,82)]" : isGameEnded ? "bg-green-400" : "bg-[rgb(168,110,185)]"}`}>
        {isDraw ? "Ничья" : isGameEnded ? `Победил ${currentPlayer === "X" ? "O" : "X"}` : `Ходит ${currentPlayer}`}
      </div>
    );
  }
}

const mapStateToPropsInfo = (state: AppState) => ({
  currentPlayer: selectCurrentPlayer(state),
  isGameEnded: selectIsGameEnded(state),
  isDraw: selectIsDraw(state),
});

export const ConnectedInformation = connect(mapStateToPropsInfo)(Information);