'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from '@/public/images/image.avif';
import {
  ArrowLeftOnRectangleIcon,
  BellIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/20/solid';
import logo from '@/public/images/pencil .png';
import { TailwindThemeContext } from '../context/TailwindThemeContext';
import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';

export default function Header() {
  const { theme, setTheme } = useContext(TailwindThemeContext);

  const handleTheme = () => {
    setTheme((theme) => (theme === '' ? 'dark' : ''));
  };

  return (
    <header className="fixed w-full bg-background dark: dark:bg-dark_background top-0">
      <div
        className={`border-b-secondary dark:border-b-dark_secondary border-b-2 px-16 py-4 flex justify-between items-center shadow-lg  `}
      >
        <Link
          href={'/'}
          className="text-accent dark:text-primary  text-xl font-bold flex items-center gap-2"
        >
          <Image src={logo} alt="logo" width={24} height={24} />

          <span>SketchShare</span>
        </Link>
        <nav>
          <ul className="flex gap-5 items-center">
            <li>
              <button className="bg-primary py-1 px-2 rounded-md hover:brightness-75 transition-all active:brightness-50">
                <Link href={'/'}>
                  <PlusIcon className="h-9 w-9 text-text " />
                </Link>
              </button>
            </li>
            <li>
              <Link href="/">
                <BellIcon className="h-9 w-9 text-text dark:text-dark_text" />
              </Link>
            </li>
            <li className="text-text dark:text-dark_text cursor-pointer">
              <button
                onClick={handleTheme}
                className="flex justify-center items-center"
              >
                {theme === 'dark' ? (
                  <MoonIcon className="h-9 w-9 leading-0" />
                ) : (
                  <SunIcon className="h-9 w-9 leading-0" />
                )}
              </button>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
            <li>
              <SignedIn>
                <SignOutButton>
                  <div>
                    <ArrowLeftOnRectangleIcon className="w-9 h-9 text-text" />
                  </div>
                </SignOutButton>
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
