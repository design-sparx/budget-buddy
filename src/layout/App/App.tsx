import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './App.styles.ts';
import { NavSidebar } from '../../components/ui/NavSidebar';
import { AppHeader } from '../../components/ui/AppHeader';

type AppLayoutProps = { children: ReactNode };

export const App = ({ children }: AppLayoutProps) => {
	return (
		<div {...stylex.props(styles.base)}>
			<NavSidebar sx={styles.sidebar} />
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.header)}>
					<AppHeader />
				</div>
				<h1>App {children}</h1>
			</div>
		</div>
	);
};
