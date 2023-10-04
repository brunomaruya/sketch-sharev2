'use client';
import { MobileNavLinks } from '@/constants/MobileNavLinks';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="mobileNavbarContainer">
      <div className="mobileNavbarBox">
        {MobileNavLinks.map((link, id) => {
          const isActivate =
            (pathname.includes(link.url) && link.url.length > 1) ||
            pathname === link.url;
          return (
            <div key={id} className="">
              <Link href={link.url}>
                <div className={`h-9 w-9 `}>
                  {isActivate ? link.activeIcon : link.icon}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
