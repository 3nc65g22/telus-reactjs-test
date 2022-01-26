import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default (props) => {
  const [appState, setAppState] = useState({});

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};
