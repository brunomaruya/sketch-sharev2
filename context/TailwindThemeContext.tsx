'use client';

import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import { ITheme } from '../types/ThemeTypes';

export const TailwindThemeContext = createContext({} as ITheme);

export default function TailwindThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('');
  const values = {
    theme,
    setTheme,
  };

  return (
    <TailwindThemeContext.Provider value={values}>
      {children}
    </TailwindThemeContext.Provider>
  );
}
