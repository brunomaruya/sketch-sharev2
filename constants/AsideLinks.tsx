import { UserButton } from '@clerk/nextjs';
import { UserIcon } from '@heroicons/react/20/solid';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  PlusIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/solid';

export const AsideLinks = [
  { linkName: 'Home', icon: <HomeIcon />, url: '/' },
  { linkName: 'Home', icon: <RectangleGroupIcon />, url: '/' },
  { linkName: 'Home', icon: <PlusIcon />, url: '/' },
  { linkName: 'Home', icon: <ChatBubbleOvalLeftEllipsisIcon />, url: '/' },
  { linkName: 'Home', icon: <UserIcon />, url: '/' },
];
