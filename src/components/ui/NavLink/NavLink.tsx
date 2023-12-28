import * as stylex from '@stylexjs/stylex';
import { ComponentProps, ReactNode } from 'react';
import { Link } from 'wouter';
import { styles } from './NavLink.styles.ts';

export type NavLinkProps = {
	href: string;
	label: string;
	active?: boolean;
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	sx?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const NavLink = (props: NavLinkProps) => {
	const { label, leftSection, rightSection, href, active, sx, ...others } =
		props;

	return (
		<div {...others} {...stylex.props(sx)}>
			<Link href={href} {...stylex.props(styles.base, active && styles.active)}>
				{leftSection}
				{label}
				{rightSection}
			</Link>
		</div>
	);
};
