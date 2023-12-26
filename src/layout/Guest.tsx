import { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';

type GuestLayoutProps = {
	children: ReactNode;
};

export const Guest = ({ children }: GuestLayoutProps) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
};
