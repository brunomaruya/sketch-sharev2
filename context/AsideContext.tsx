'use client';
import { IAside } from '@/types/AsideTypes';
import React, { createContext, useEffect, useState } from 'react';

export const AsideContext = createContext({} as IAside);

export default function AsideProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const values = {
    isOpen,
    setIsOpen,
  };

  return (
    <AsideContext.Provider value={values}>{children}</AsideContext.Provider>
  );
}
