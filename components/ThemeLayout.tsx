'use client';
import React, { useContext } from 'react';
import { TailwindThemeContext } from '../context/TailwindThemeContext';

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(TailwindThemeContext);
  return (
    <div className={`${theme} `}>
      <div className="bg-background dark:bg-dark_background"> {children}</div>
    </div>
  );
}
