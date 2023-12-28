import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './App.styles.ts';
import { AppHeader, NavSidebar } from '../../components/ui';

type AppLayoutProps = { children: ReactNode };

export const App = ({ children }: AppLayoutProps) => {
	return (
		<div {...stylex.props(styles.base)}>
			<NavSidebar sx={styles.sidebar} />
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.header)}>
					<AppHeader />
				</div>
				{children}
			</div>
		</div>
	);
};
