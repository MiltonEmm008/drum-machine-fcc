import React, { useState, useRef } from "react";
import { ActionContext } from "./ActionContext";

function ActionProvider({ children }) {
  const [action, setAction] = useState("");
  const timerId = useRef(null);

  function handleActionChange(actionString) {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    setAction(actionString);

    timerId.current = setTimeout(() => {
      setAction("");
      timerId.current = null;
    }, 1200);
  }
  return (
    <ActionContext.Provider value={{ action, handleActionChange }}>
      {children}
    </ActionContext.Provider>
  );
}

export default ActionProvider;
