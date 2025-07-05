import React from "react";
import DrumsContainer from "../drums-container/DrumsContainer";
import ControlsContainer from "../controls-container/ControlsContainer";

function DrumMachine() {
  return (
    <div id="drum-machine">
      <div className="credits">
        Por{" "}
        <a target="_blank" href="https://github.com/MiltonEmm008/drum-machine-fcc">Milton</a>
      </div>
      <DrumsContainer />
      <ControlsContainer />
    </div>
  );
}

export default DrumMachine;
