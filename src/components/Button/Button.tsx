import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Button.styles.ts';
import { ISizes } from '../../types';

export type ButtonVariants =
	| 'subtle'
	| 'filled'
	| 'transparent'
	| 'outline'
	| 'default';

export type ButtonProps = {
	href?: string;
	variant?: ButtonVariants;
	size?: ISizes;
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	loading?: boolean;
	disabled?: boolean;
	w?: stylex.StyleXStyles<{ width?: string }>;
} & ComponentProps<'a' | 'button'>;

export const Button = (props: ButtonProps) => {
	const {
		href,
		variant = 'default',
		size = 'md',
		loading = false,
		disabled = false,
		leftSection,
		rightSection,
		w,
		...others
	} = props;

	return href ? (
		<a
			href={href}
			{...stylex.props(styles.base, styles[variant], styles[size], styles.w(w))}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</a>
	) : (
		<button
			{...stylex.props(styles.base, styles[variant], styles[size], styles.w(w))}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</button>
	);
};
