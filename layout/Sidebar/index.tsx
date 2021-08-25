import React from 'react';
import cn from 'classnames';
import { IProps } from './props';
import styles from './styles.module.css';

const Sidebar = ({ ...props }: IProps): JSX.Element => (
	<aside {...props}>Sidebar</aside>
);

export default Sidebar;
