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
		{ id: '/', label: 'Activity' },
		{ id: '/exercises', label: 'Workout' },
		{ id: '/chat', label: 'Messages' },
		{ id: '/inbox', label: 'Inbox' },
	];

	return (
		<footer className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-20 lg:hidden p-8 bg-backgroundSecondary'>
			<div className='flex flex-row items-center justify-between w-full'>
				{options.map((icon) => (
					<Link key={icon.id} href={icon.id}>
						<div className='flex flex-col items-center justify-center'>
							<FooterIcon id={icon.id} isSelected={pathname === icon.id} />
						</div>
					</Link>
				))}
			</div>
		</footer>
	);
}
