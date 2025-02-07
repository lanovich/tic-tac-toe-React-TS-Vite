import { connect } from "react-redux";
import {
  selectCurrentPlayer,
  selectField,
  selectWinner,
} from "../../selectors";
import { makeMove, setIsGameEnded } from "../../actions";
import { Component } from "react";
import { AppState } from "../../types";

interface FieldProps {
  field: string[];
  winner: string | null;
  currentPlayer: "X" | "O";
  makeMove: (index: number, player: "X" | "O") => void;
  setIsGameEnded: (isEnded: boolean) => void;
}

class Field extends Component<FieldProps> {
  componentDidUpdate(prevProps: FieldProps) {
    if (this.props.winner && this.props.winner !== prevProps.winner) {
      this.props.setIsGameEnded(true);
    }
  }

  handleMakeMove = (index: number) => {
    this.props.makeMove(index, this.props.currentPlayer);
  };

  render() {
    const { field } = this.props;
    return (
      <div className="h-3/4 w-[90%] grid grid-cols-[repeat(3,1fr)] justify-self-center self-center shadow-[inset_2px_2px_7px_0px_black] bg-[rgb(161,100,151)]">
        {field.map((cell, index) => (
          <span
            className={`flex border justify-center items-center text-[9vh] leading-[0] select-none cursor-cell border-solid ${cell !== "" ? "bg-[rgb(139,71,128)] shadow-[2px_2px_7px_0px] hover:cursor-default" : "hover:bg-[rgb(139,84,131)] hover:shadow-[inset_2px_2px_7px_0px]"}`}
            key={index}
            onClick={() => this.handleMakeMove(index)}
          >
            {cell}
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToPropsField = (state: AppState) => ({
  field: selectField(state),
  winner: selectWinner(state),
  currentPlayer: selectCurrentPlayer(state),
});

const mapDispatchToPropsField = { makeMove, setIsGameEnded };

export const ConnectedField = connect(mapStateToPropsField, mapDispatchToPropsField)(Field);
