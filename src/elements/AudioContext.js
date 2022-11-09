import { createContext, useState, useEffect, useContext } from "react";

export const AudioContext = createContext();
export const AudioContextProvider = (props) => {
  const [stopOthers, setStopOthers] = useState(false);
  return (
    <AudioContext.Provider value={{ stopOthers, setStopOthers }}>
      {props.children}
    </AudioContext.Provider>
  );
};
