'use client';
import React, { useContext } from 'react';
import { Image } from 'next/dist/client/image-component';
import logo from '@/public/images/pencil .png';
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { AsideContext } from '@/context/AsideContext';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/20/solid';
import { AsideLinks } from '@/constants/AsideLinks';

export default function Leftbar() {
  const { isOpen } = useContext(AsideContext);

  return (
    <div className="">
      <div
        className={`h-screen w-full bg-black  absolute ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }  transition-opacity `}
      ></div>
      <aside
        className={`aside  ${
          isOpen ? '' : '-translate-x-72'
        } transition-transform`}
      >
        <section className="flex flex-col gap-7">
          {AsideLinks.map((link) => {
            return (
              <Link href="/" className="flex gap-2 items-center">
                <div className="h-9 w-9"> {link.icon}</div>
                <span className="text-2xl">Home</span>
              </Link>
            );
          })}
        </section>
        <SignedIn>
          <SignOutButton>
            <Link href={'/sign-in'}>
              <div
                className="flex gap-7 items-center cursor-pointer p-3
             bg-primary dark:bg-dark_primary dark:text-text rounded-md 
             hover:brightness-75 transition-all active:brightness-50"
              >
                <ArrowLeftOnRectangleIcon className="w-9 h-9 text-text" />
                <span>Log out</span>
              </div>
            </Link>
          </SignOutButton>
        </SignedIn>
      </aside>
    </div>
  );
}
