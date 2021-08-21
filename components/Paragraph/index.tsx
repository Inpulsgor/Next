import React from 'react';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Paragraph = ({ size = "m", className, children, ...props }: IProps): JSX.Element => {
	return (
		<p
			className={cn(styles.paragraph, className, {
				[styles.s]: size === "s",
				[styles.m]: size === "m",
				[styles.l]: size === "l",
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default Paragraph;
