import { ReactNode, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import {
	AppHeader,
	Drawer,
	Flex,
	NavLink,
	NavSidebar,
} from '../../components/ui';
import { useMediaQuery } from 'react-responsive';
import { LINKS } from '../../components/ui/NavSidebar/NavSidebar.tsx';
import { Logo } from '../../components/Logo';
import { Container } from 'react-grid-system';
import { styles } from './App.styles.ts';

type AppLayoutProps = { children: ReactNode };

export const App = ({ children }: AppLayoutProps) => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<>
			<div {...stylex.props(styles.base)}>
				{isDesktopOrLaptop && <NavSidebar sx={styles.sidebar} />}
				<div {...stylex.props(styles.main, styles.w('100%'))}>
					<Container fluid {...stylex.props(styles.header)}>
						<AppHeader toggleMenu={() => setMenuOpened(!menuOpened)} />
					</Container>
					<Container fluid {...stylex.props(styles.children)}>
						{children}
					</Container>
				</div>
			</div>
			<Drawer title={<Logo />} open={menuOpened} onOpenChange={setMenuOpened}>
				<Flex direction="column">
					{LINKS.map((link) => (
						<NavLink
							key={link.title}
							href={link.href}
							label={link.title}
							active={!!link.active}
							sx={styles.mobileLink}
						/>
					))}
				</Flex>
			</Drawer>
		</>
	);
};
