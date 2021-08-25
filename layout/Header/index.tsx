import React from 'react';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Header = ({ ...props }: IProps): JSX.Element => (
	<header {...props}>Header</header>
);

export default Header;
