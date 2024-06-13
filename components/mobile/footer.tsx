'use client';

import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

import FooterIcon from './footer-icon';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default function MobileFooter() {
	const pathname = usePathname();

	const options = [
		{ id: '/', label: 'Home' },
		{ id: '/exercises', label: 'Exercises' },
		{ id: '/chat', label: 'Messages' },
		{ id: '/inbox', label: 'Inbox' },
		{ id: '/calendar', label: 'Calendar' },
	];

	return (
		<footer className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-20 lg:hidden p-8 px-0 bg-backgroundSecondary'>
			<div className='flex flex-row items-center justify-evenly w-full'>
				{options.map((icon) => (
					<Link key={icon.id} href={icon.id}>
						<div className='flex flex-col gap-y-1 items-center justify-center min-w-14 w-full'>
							<FooterIcon id={icon.id} isSelected={pathname === icon.id} />
							<h6 className='text-[11px] font-light'>{icon.label}</h6>
						</div>
					</Link>
				))}
			</div>
		</footer>
	);
}
