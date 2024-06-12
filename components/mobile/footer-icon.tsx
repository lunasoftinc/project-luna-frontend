'use client';

import { cn } from '@/lib/utils';
import { Bolt, Dumbbell, Inbox, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface IconProps {
	id: string;
	isSelected?: boolean | undefined;
}

export default function FooterIcon({ id, isSelected = false }: IconProps) {
	const selectedColor = 'text-red-400';
	const defaultColor = 'text-gray-700';

	const ICON_SIZE = 24;

	switch (id) {
		case '/':
			return (
				<Bolt
					size={ICON_SIZE}
					className={cn(isSelected ? selectedColor : defaultColor)}
				/>
			);
		case '/exercises':
			return (
				<Dumbbell
					size={ICON_SIZE}
					className={cn(isSelected ? selectedColor : defaultColor)}
				/>
			);
		case '/chat':
			return (
				<MessageCircle
					size={ICON_SIZE}
					className={cn(isSelected ? selectedColor : defaultColor)}
				/>
			);
		case '/inbox':
			return (
				<Inbox
					size={ICON_SIZE}
					className={cn(isSelected ? selectedColor : defaultColor)}
				/>
			);
		default:
			return null;
	}
}