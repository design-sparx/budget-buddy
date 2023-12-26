import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
	wrapper: {
		backgroundColor: 'black',
	},
	sidebar: {
		height: '100%',
	},
	main: {},
});

type AppLayoutProps = { children: ReactNode };

export const App = ({ children }: AppLayoutProps) => {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<section {...stylex.props(styles.sidebar)}>sidebar+</section>
			<section {...stylex.props(styles.sidebar)}>
				<h1>App {children}</h1>
			</section>
		</div>
	);
};
