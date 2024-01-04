import { Flex } from '../Flex';
import * as stylex from '@stylexjs/stylex';
import { styles } from './AppHeader.styles.ts';
import { IconButton } from '../IconButton';
import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react';
import { UserProfile } from '../../UserProfile';
import { useMediaQuery } from 'react-responsive';
import { spacing } from '../../../token.stylex.ts';

export type AppHeaderProps = {
	toggleMenu: () => void;
	h?: stylex.StyleXStyles<{ height?: string | number }>;
	sx?: stylex.StyleXStyles;
};

export const AppHeader = (props: AppHeaderProps) => {
	const { toggleMenu, sx, h = 60 } = props;
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});

	return (
		<div {...stylex.props(styles.base, styles.h(h), sx)}>
			<Flex align="center">
				{!isDesktopOrLaptop && (
					<IconButton onClick={toggleMenu}>
						<MenuIcon />
					</IconButton>
				)}
				<h5 {...stylex.props(styles.pageName)}>dashboard</h5>
			</Flex>
			<Flex align="center" gap={spacing['2']}>
				<IconButton>
					<SearchIcon size={18} />
				</IconButton>
				<IconButton>
					<BellIcon size={18} />
				</IconButton>
				<UserProfile />
			</Flex>
		</div>
	);
};
