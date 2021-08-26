import React from 'react';
import { format } from 'date-fns';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Footer = ({ className, ...props }: IProps): JSX.Element => (
	<footer className={cn(styles.footer, className)} {...props}>
		<span>Next-app - {format(new Date(), 'yyyy')} All Rights Reserved</span>
		<a href="#" target="_blank">Terms of use</a>
		<a href="#" target="_blank">Privacy Policy</a>
	</footer>
);

export default Footer;
