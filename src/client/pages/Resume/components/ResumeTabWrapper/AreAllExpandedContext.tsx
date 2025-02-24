import React, { createContext, useState, useContext, FC } from "react";

const AreAllExpandedContext = createContext<boolean | null>(null);

const SetAreAllExpandedContext = createContext<
  ((s: boolean | ((s: boolean) => boolean)) => void) | null
>(null);

export const ExpandProvider: FC = ({ children }) => {
  const [areAllExpanded, setAreAllExpanded] = useState(false);

  return (
    <AreAllExpandedContext.Provider value={areAllExpanded}>
      <SetAreAllExpandedContext.Provider value={setAreAllExpanded}>
        {children}
      </SetAreAllExpandedContext.Provider>
    </AreAllExpandedContext.Provider>
  );
};

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
