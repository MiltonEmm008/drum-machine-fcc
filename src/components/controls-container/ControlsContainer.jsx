import React, { useContext } from "react";
import { ActionContext } from "../../context/ActionContext";
import styles from './controlcontainer.module.scss'

function ControlsContainer() {
  const { action } = useContext(ActionContext);

  return (
    <div className={styles["control-container"]}>
      <p id="display">{action}</p>
    </div>
  );
}

export default ControlsContainer;
