import { UserButton } from '@clerk/nextjs';
import {
  HomeIcon,
  RectangleGroupIcon,
  PlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid';

export const MobileNavLinks = [
  { linkName: 'Home', icon: <HomeIcon />, url: '/' },
  { linkName: 'Home', icon: <RectangleGroupIcon />, url: '/' },
  { linkName: 'Home', icon: <PlusIcon />, url: '/' },
  { linkName: 'Home', icon: <ChatBubbleOvalLeftEllipsisIcon />, url: '/' },
  { linkName: 'Home', icon: <UserButton afterSignOutUrl="/" />, url: '/' },
];
