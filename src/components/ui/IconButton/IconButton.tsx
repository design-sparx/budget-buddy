import { ButtonVariants, ISizes } from '../../../types';
import { ComponentProps } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './IconButton.styles.ts';

export type IconButtonProps = {
	href?: string;
	variant?: ButtonVariants;
	size?: Partial<ISizes>;
	loading?: boolean;
	disabled?: boolean;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	h?: stylex.StyleXStyles<{ height?: string | number }>;
	sx?: stylex.StyleXStyles<{ textTransform?: string }>;
} & ComponentProps<'a' | 'button'>;

export const IconButton = (props: IconButtonProps) => {
	const { href, variant = 'default', size = 'md', w, sx, h, ...others } = props;

	return href ? (
		<a
			href={href}
			{...stylex.props(
				styles.base,
				styles[variant],
				size && styles[size],
				styles.w(w),
				styles.h(h),
				sx
			)}
		>
			{others.children}
		</a>
	) : (
		<button
			{...stylex.props(
				styles.base,
				styles[variant],
				size && styles[size],
				styles.w(w),
				styles.h(h),
				sx
			)}
		>
			{others.children}
		</button>
	);
};
