import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles as buttonStyles } from './Button.styles.ts';
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
	size?: Partial<ISizes>;
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	loading?: boolean;
	disabled?: boolean;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	styles?: stylex.StyleXStyles<{ textTransform?: string }>;
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
		styles,
		...others
	} = props;

	return href ? (
		<a
			href={href}
			{...stylex.props(
				buttonStyles.base,
				buttonStyles[variant],
				size && buttonStyles[size],
				buttonStyles.w(w),
				styles
			)}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</a>
	) : (
		<button
			{...stylex.props(
				buttonStyles.base,
				buttonStyles[variant],
				size && buttonStyles[size],
				buttonStyles.w(w),
				styles
			)}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</button>
	);
};
