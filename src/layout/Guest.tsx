import { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import * as stylex from '@stylexjs/stylex';
import { tokens } from '../token.stylex.ts';

const styles = stylex.create({
	base: {
		backgroundColor: tokens.primaryBase,
		minHeight: '100dvh',
	},
});

type GuestLayoutProps = {
	children: ReactNode;
};

export const Guest = ({ children }: GuestLayoutProps) => {
	return (
		<main {...stylex.props(styles.base)}>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</main>
	);
};
