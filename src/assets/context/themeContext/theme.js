import { createContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

//export default ThemeContext;


import React, { useState, useEffect } from 'react';



const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((storedTheme) => {
      if (storedTheme) {
        setTheme(storedTheme);
      }
    });
  }, []);

  const updateTheme = (newTheme) => {
    AsyncStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
