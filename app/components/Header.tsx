import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Header() {
  return <UserButton afterSignOutUrl="/" />;
}
