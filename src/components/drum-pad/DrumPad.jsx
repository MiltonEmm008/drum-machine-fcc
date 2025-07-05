import React from "react";
import styles from "./drumpad.module.scss";

function DrumPad({ audioSrc, keyword, onClick, audioDesc }) {
  return (
    <div className={`${styles["drum-pad"]} drum-pad`} id={audioDesc} onClick={onClick}>
      <audio className="clip" src={audioSrc} id={keyword}></audio>
      {keyword}
    </div>
  );
}

export default DrumPad;
