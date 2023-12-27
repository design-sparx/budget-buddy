import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import { Logo } from '../../Logo';
import { styles } from './Footer.styles.ts';
import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons';

export type FooterProps = {
	sx?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Footer = ({ sx, ...others }: FooterProps) => {
	return (
		<div {...others} {...stylex.props(styles.base, sx)}>
			<Logo />
			<div {...stylex.props(styles.actions)}>
				<TwitterLogoIcon />
				<GitHubLogoIcon />
				<InstagramLogoIcon />
				<LinkedInLogoIcon />
			</div>
		</div>
	);
};
