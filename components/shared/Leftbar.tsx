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
import { usePathname, useRouter } from 'next/navigation';

export default function Leftbar() {
  const { isOpen, setIsOpen } = useContext(AsideContext);
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="hidden md:block">
      {/* dark transparent background  */}
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={`h-full w-full bg-black  fixed ${
          isOpen ? 'opacity-50 block' : 'opacity-0 hidden'
        }  transition-opacity `}
      ></div>
      {/* ============ Aside ============*/}
      <aside
        className={`aside z-40  ${
          isOpen ? '' : '-translate-x-72'
        } transition-transform`}
      >
        <section className="flex flex-col gap-7">
          {AsideLinks.map((link, id) => {
            return (
              <Link href="/" key={id} className="flex gap-2 items-center">
                <div className="h-7 w-7 md:h-9 md:w-9"> {link.icon}</div>
                <span className="text-2xl">Home</span>
              </Link>
            );
          })}
        </section>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push('/sign-in')}>
            <div className="signOutButton">
              <ArrowLeftOnRectangleIcon className="w-9 h-9 text-text" />
              <span>Log out</span>
            </div>
          </SignOutButton>
        </SignedIn>
      </aside>
    </div>
  );
}
