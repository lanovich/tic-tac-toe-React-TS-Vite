import { Component } from "react";
import { restartGame } from "../../actions";
import { connect } from "react-redux";
import { ConnectedField } from "../Field/Field";
import { ConnectedInformation } from "../Information/Information";

interface GameProps {
  restartGame: () => void;
}

class Game extends Component<GameProps> {
  handleRestartGame = () => {
    this.props.restartGame();
  };

  render() {
    return (
      <div className="min-h-[90%] min-w-[90%] w-[50vh] h-[60vh] bg-[#c56caf] shadow-[8px_8px_10px_5px_rgba(0,0,0,0.1)] text-center p-[15px] rounded-[20px]">
        <ConnectedInformation />
        <ConnectedField />
        <button
          className="cursor-pointer bg-[rgb(168,110,185)] w-[100px] shadow-[1px_1px_5px_0px] mt-[10vh] p-[5px] rounded-[5px] border-[none] hover:transition-[0.5s] hover:bg-[rgb(161,32,201)] active:shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
          onClick={this.handleRestartGame}
        >
          Restart
        </button>
      </div>
    );
  }
}

const mapDispatchToPropsGame = { restartGame };

export default connect(null, mapDispatchToPropsGame)(Game);