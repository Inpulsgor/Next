import React from 'react';
import { IProps } from './props';
import { Footer, Header, Sidebar } from '..';
import styles from './styles.module.css';

const Layout = ({ children, ...props }: IProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.main}>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export default Layout;
