'use client';

import {
	Bolt,
	Dumbbell,
	Home,
	Inbox,
	MessageCircle,
	icons,
} from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default function MobileFooter() {
	const ICON_SIZE = 24;
	return (
		<footer className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-20 lg:hidden p-8 bg-zinc-100'>
			<div className='flex flex-row items-center justify-between w-full'>
				<Bolt size={ICON_SIZE} className='text-red-500' />
				<Dumbbell size={ICON_SIZE} className='text-gray-400' />
				<MessageCircle size={ICON_SIZE} className='text-gray-400' />
				<Inbox size={ICON_SIZE} className='text-gray-400' />
				<Avatar className='w-auto h-10'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>LN</AvatarFallback>
				</Avatar>
			</div>
		</footer>
	);
}
