import { Flex, FlexProps } from '../Flex';
import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './TextField.styles.ts';
import * as Label from '@radix-ui/react-label';

export type TextFieldSizes = 'sm' | 'md' | 'lg';
export type TextFieldVariants = 'default' | 'subtle';

export type TextFieldProps = {
	label?: string;
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	w?: string | number;
	size?: TextFieldSizes;
	variant?: TextFieldVariants;
} & ComponentProps<'input'> &
	FlexProps;

export const TextField = (props: TextFieldProps) => {
	const {
		leftSection,
		rightSection,
		label,
		size = 'md',
		variant = 'default',
		sx,
		w = 200,
		...others
	} = props;

	return (
		<Flex>
			<Label.Root {...stylex.props(styles.label)}>{label}</Label.Root>
			<div
				{...stylex.props(
					styles.base,
					size && styles[size],
					variant && styles[variant],
					styles.w(w),
					sx
				)}
			>
				{leftSection && <div {...stylex.props(styles.slot)}>{leftSection}</div>}
				<input {...others} style={{ width: w || 200 }} />
				{rightSection && (
					<div {...stylex.props(styles.slot)}>{rightSection}</div>
				)}
			</div>
		</Flex>
	);
};
