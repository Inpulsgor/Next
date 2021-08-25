import React, { FunctionComponent } from 'react';
import { Layout } from '../../layout';

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
