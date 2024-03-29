import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Button.styles.ts';
import { ButtonVariants, ISizes } from '../../../types';

export type ButtonProps = {
	href?: string;
	variant?: ButtonVariants;
	size?: Partial<ISizes>;
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	loading?: boolean;
	disabled?: boolean;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	sx?: stylex.StyleXStyles<{ textTransform?: string }>;
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
		sx,
		...others
	} = props;

	return href ? (
		<a
			href={href}
			{...stylex.props(
				styles.base,
				styles[variant],
				size && styles[size],
				styles.w(w),
				sx
			)}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</a>
	) : (
		<button
			{...stylex.props(
				styles.base,
				styles[variant],
				size && styles[size],
				styles.w(w),
				sx
			)}
		>
			{leftSection}
			{others.children}
			{rightSection}
		</button>
	);
};
