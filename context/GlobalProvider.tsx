import React from 'react';
import TailwindThemeProvider from './TailwindThemeContext';
import AsideProvider from './AsideContext';

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TailwindThemeProvider>
      <AsideProvider>{children}</AsideProvider>
    </TailwindThemeProvider>
  );
}
