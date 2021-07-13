import { ReactNode } from 'react';
export interface ButtonProps {
	children: ReactNode;
	style: 'primary' | 'ghost';
}