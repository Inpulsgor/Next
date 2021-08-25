import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}