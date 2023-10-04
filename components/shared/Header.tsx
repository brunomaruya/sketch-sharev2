'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from '@/public/images/image.avif';
import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/20/solid';
import logo from '@/public/images/pencil .png';
import { TailwindThemeContext } from '../../context/TailwindThemeContext';
import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';
import { AsideContext } from '@/context/AsideContext';

export default function Header() {
  const { theme, setTheme } = useContext(TailwindThemeContext);
  const { setIsOpen } = useContext(AsideContext);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleTheme = () => {
    setTheme((theme) => (theme === '' ? 'dark' : ''));
  };

  return (
    <header className=" fixed w-full bg-background dark: dark:bg-dark_background top-0 text-text dark:text-dark_text z-50">
      <div className={` header ${isSearchBarOpen ? 'flex' : 'hidden'}  gap-3`}>
        <div className="searchBarDivMb">
          <MagnifyingGlassIcon className="text-text h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="searchBarInputMb"
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setIsSearchBarOpen((isOpen) => !isOpen)}
        >
          Cancel
        </div>
      </div>
      {/* ================================================== */}
      <div className={` header ${isSearchBarOpen ? 'hidden' : 'flex'}  gap-3`}>
        <div className="flex items-center gap-1 md:gap-4">
          <div className="hidden md:block">
            <Bars3Icon
              className="h-7 w-7  md:h-9 md:w-9 cursor-pointer"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          </div>
          <Link
            href={'/'}
            className="text-accent dark:text-primary font-bold flex  items-center gap-0 md:gap-2"
          >
            <div className="h-5 w-5 md:h-7 md:w-7">
              <Image src={logo} alt="logo" />
            </div>

            <span className="text-base md:text-lg">SketchShare</span>
          </Link>
        </div>

        <div className="searchBarDiv">
          <MagnifyingGlassIcon className="md:h-5 md:w-5 cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            className="searchBarInput"
          />
        </div>

        <nav>
          <ul className="flex gap-2 md:gap-5 items-center">
            <li>
              <MagnifyingGlassIcon
                onClick={() => setIsSearchBarOpen((isOpen) => !isOpen)}
                className=" h-7 w-7 cursor-pointer md:hidden"
              />
            </li>
            <li className="hidden md:block">
              <button className="bg-primary py-1 px-2 rounded-md hover:brightness-75 transition-all active:brightness-50  ">
                <Link href={'/'}>
                  <PlusIcon className="h-9 w-9 text-text " />
                </Link>
              </button>
            </li>
            <li>
              <Link href="/">
                <BellIcon className="h-7 w-7 md:h-9 md:w-9 text-text dark:text-dark_text" />
              </Link>
            </li>
            <li className="text-text dark:text-dark_text cursor-pointer">
              <button
                onClick={handleTheme}
                className="flex justify-center items-center"
              >
                {theme === 'dark' ? (
                  <MoonIcon className="h-7 w-7 md:h-9 md:w-9 leading-0" />
                ) : (
                  <SunIcon className="h-7 w-7 md:h-9 md:w-9 leading-0" />
                )}
              </button>
            </li>
            <li className="hidden md:block">
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
