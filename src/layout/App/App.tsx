import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './App.styles.ts';
import { NavSidebar } from '../../components/ui/NavSidebar';

type AppLayoutProps = { children: ReactNode };

export const App = ({ children }: AppLayoutProps) => {
	return (
		<div {...stylex.props(styles.base)}>
			<NavSidebar sx={styles.sidebar} />
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.header)}>header</div>
				<h1>App {children}</h1>
			</div>
		</div>
	);
};
