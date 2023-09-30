'use client';
import React, { useContext } from 'react';
import { Image } from 'next/dist/client/image-component';
import logo from '@/public/images/pencil .png';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { AsideContext } from '@/context/AsideContext';

export default function Leftbar() {
  const { isOpen } = useContext(AsideContext);

  return (
    <div className="">
      <div
        className={`h-screen w-screen bg-black  absolute ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }  transition-opacity `}
      ></div>
      <aside
        className={`aside  ${
          isOpen ? '' : '-translate-x-72'
        } transition-transform`}
      >
        <div>Test4ee</div>
        <div>Test4ee436</div>
        <div>Test4e6534563546e</div>
      </aside>
    </div>
  );
}
