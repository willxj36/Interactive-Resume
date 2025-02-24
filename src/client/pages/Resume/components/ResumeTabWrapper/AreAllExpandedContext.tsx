import React, { createContext, useState, useContext } from "react";

// Context for the state
const AreAllExpandedContext = createContext<boolean | null>(null);

// Context for the state updater function
const SetAreAllExpandedContext = createContext<
  ((s: boolean | ((s: boolean) => boolean)) => void) | null
>(null);

// Provider component
export const ExpandProvider = ({ children }) => {
  const [areAllExpanded, setAreAllExpanded] = useState(false);

  return (
    <AreAllExpandedContext.Provider value={areAllExpanded}>
      <SetAreAllExpandedContext.Provider value={setAreAllExpanded}>
        {children}
      </SetAreAllExpandedContext.Provider>
    </AreAllExpandedContext.Provider>
  );
};

// Custom hooks to use the contexts
export const useAreAllExpanded = () => {
  const context = useContext(AreAllExpandedContext);
  if (context === null) {
    throw new Error(
      "useAreAllExpanded must be within ExpandProvider component"
    );
  }
  return context;
};

export const useSetAreAllExpanded = () => {
  const context = useContext(SetAreAllExpandedContext);
  if (context === null) {
    throw new Error(
      "useSetAreAllExpanded must be within ExpandProvider component"
    );
  }
  return context;
};
