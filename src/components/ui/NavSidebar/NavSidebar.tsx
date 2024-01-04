import { Flex } from '../Flex';
import { Logo } from '../../Logo';
import {
	BarChart2Icon,
	LayoutDashboardIcon,
	PieChartIcon,
	SettingsIcon,
} from 'lucide-react';
import { PATH_APP } from '../../../constants/routes.ts';
import { NavLink } from '../NavLink';
import * as stylex from '@stylexjs/stylex';
import { styles } from './NavSidebar.styles.ts';

export const LINKS = [
	{
		title: 'home',
		icon: <LayoutDashboardIcon />,
		href: PATH_APP.root,
		active: true,
	},
	{ title: 'insights', icon: <BarChart2Icon />, href: '#' },
	{ title: 'reports', icon: <PieChartIcon />, href: '#' },
	{ title: 'settings', icon: <SettingsIcon />, href: '#' },
];

export type NavSidebarProps = {
	w?: string | number;
	sx?: stylex.StyleXStyles;
};

export const NavSidebar = (props: NavSidebarProps) => {
	const { sx, w = 300 } = props;

	return (
		<div {...stylex.props(styles.base, styles.w(w), sx)}>
			<Flex direction="column">
				<Logo sx={styles.brand} />
				<Flex direction="column" {...stylex.props(styles.links)}>
					{LINKS.map((link) => (
						<NavLink
							key={link.title}
							href={link.href}
							label={link.title}
							active={!!link.active}
						/>
					))}
				</Flex>
			</Flex>
		</div>
	);
};
