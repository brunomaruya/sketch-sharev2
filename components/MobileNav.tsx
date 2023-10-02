'use client';
import { MobileNavLinks } from '@/constants/MobileNavLinks';
import Link from 'next/link';
import React from 'react';

export default function MobileNav() {
  return (
    <div className=" md:hidden fixed bottom-0 text-text dark:text-dark_text bg-background dark:bg-dark_background w-full h-16">
      <div className="flex items-center gap-5 py-3 justify-center ">
        {MobileNavLinks.map((link, id) => {
          return (
            <div key={id} className="">
              <Link href={link.url}>
                <div className={`h-9 w-9 ${id == 4 ? 'h-full w-full' : ''}`}>
                  {link.icon}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
