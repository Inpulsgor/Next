import React from 'react';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Footer = ({ ...props }: IProps): JSX.Element => (
	<footer className={cn(styles.footer)} {...props}>Footer</footer>
);

export default Footer;
