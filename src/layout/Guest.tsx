import { ReactNode } from 'react';
import { Navbar } from '../components/ui/Navbar';
import * as stylex from '@stylexjs/stylex';
import { tokens } from '../token.stylex.ts';
import { Footer } from '../components/ui';

const styles = stylex.create({
	base: {
		backgroundColor: tokens.primaryBase,
		color: tokens.primaryText,
		minHeight: '100dvh',
	},
});

type GuestLayoutProps = {
	children: ReactNode;
};

export const Guest = ({ children }: GuestLayoutProps) => {
	return (
		<>
			<main {...stylex.props(styles.base)}>
				<header>
					<Navbar />
				</header>
				<>{children}</>
				<Footer />
			</main>
		</>
	);
};
