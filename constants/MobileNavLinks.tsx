import { UserButton } from '@clerk/nextjs';

import {
  HomeIcon,
  RectangleGroupIcon,
  PlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import {
  HomeIcon as HomeIconActive,
  RectangleGroupIcon as RectangleGroupIconActive,
  PlusIcon as PlusIconActive,
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconActive,
  UserIcon as UserIconActive,
} from '@heroicons/react/24/solid';

export const MobileNavLinks = [
  {
    linkName: 'Home',
    icon: <HomeIcon />,
    activeIcon: <HomeIconActive />,
    url: '/',
  },
  {
    linkName: 'Groups',
    icon: <RectangleGroupIcon />,
    activeIcon: <RectangleGroupIconActive />,
    url: '/groups',
  },
  {
    linkName: 'Home',
    icon: <PlusIcon />,
    activeIcon: <PlusIconActive />,
    url: '/post',
  },
  {
    linkName: 'Home',
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    activeIcon: <ChatBubbleOvalLeftEllipsisIconActive />,
    url: '/chat',
  },
  {
    linkName: 'Home',
    icon: <UserIcon />,
    activeIcon: <UserIconActive />,
    url: '/profile',
  },
];
