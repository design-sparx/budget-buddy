import { styles as logoStyles } from './Logo.styles.ts';
import { ComponentProps } from 'react';
import { stylex } from '@stylexjs/stylex';

export type LogoProps = ComponentProps<'div'>;

export const Logo = () => {
	return (
		<div {...stylex.props(logoStyles.base)}>
			<h4 {...stylex.props(logoStyles.text)}>budget buddy</h4>
		</div>
	);
};
