// DojoContextProvider.tsx

import React, { useState, createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";

// Define the type for the context value
interface DojoContextProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

// Create the context with a default value for setMode
export const DojoContext = createContext<DojoContextProps  | undefined>(undefined);


const DojoProvider: React.FC<{children:ReactNode}> =({ children }) => {
  const [mode, setMode] = React.useState<string>('start');

  return (
    <div>
      <DojoContext.Provider
        value={{
          mode,
          setMode,
        }}
      >
        {children}
      </DojoContext.Provider>
    </div>
  );
}

const UseDojoContext = () => {
  const context = useContext(DojoContext);
  if (!context) {
    throw new Error('useDojoContext must be within a provider')
  }
  return context;
}

export {DojoProvider, UseDojoContext};
