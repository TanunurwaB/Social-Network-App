import { createContext, useEffect, useState } from 'react';

// 1. Correctly initialize the context
export const DarkModeContext = createContext();

// 2. Correct function name, proper hook usage
export const DarkmodeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false // localStorage stores strings
  );

  const toggle = () => {
    setDarkMode((!darkMode)); // safer functional update
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // 3. Fix typo in `toggle` and correctly structure `value`
  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
