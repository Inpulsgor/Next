import React, { FunctionComponent } from 'react';
import { IProps } from './props';
import { Footer, Header, Sidebar} from '..';

const Layout = ({ children, ...props }: IProps): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<section>
					{children}
				</section>
			</main>
			<Footer />
		</>
	);
};

const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};

export default withLayout;
