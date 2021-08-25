import React from 'react';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Tag = ({ size = "s", color = "ghost", href, className, children, ...props}: IProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.ghost]: color === 'ghost',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
