import { Flex } from '../Flex';
import * as stylex from '@stylexjs/stylex';
import { styles } from './AppHeader.styles.ts';
import { IconButton } from '../IconButton';
import { BellIcon, SearchIcon } from 'lucide-react';
import { UserProfile } from '../../UserProfile';

export type AppHeaderProps = {
	h?: stylex.StyleXStyles<{ height?: string | number }>;
	sx?: stylex.StyleXStyles;
};

export const AppHeader = (props: AppHeaderProps) => {
	const { sx, h = 60 } = props;

	return (
		<div {...stylex.props(styles.base, styles.h(h), sx)}>
			<h5 {...stylex.props(styles.pageName)}>dashboard</h5>
			<Flex sx={styles.controls}>
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
