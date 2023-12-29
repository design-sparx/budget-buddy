import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import { styles } from './Flex.styles.ts';
import { spacing } from '../../../token.stylex.ts';
import { BaseProps } from '../../../types';

export type FlexProps = {
	direction?: 'row' | 'column';
	gap?: string | number;
	align?: 'start' | 'stretch' | 'end' | 'center';
	justify?: 'between' | 'around' | 'even' | 'center' | 'start' | 'end';
} & ComponentProps<'div'> &
	BaseProps;

export const Flex = (props: FlexProps) => {
	const {
		sx,
		direction = 'row',
		gap = spacing['2'],
		justify = 'start',
		align = 'stretch',
		...others
	} = props;

	return (
		<div
			{...stylex.props(
				styles.base,
				direction && styles[direction],
				styles.gap(gap),
				styles[`align${align}`],
				styles[`justify${justify}`],
				sx
			)}
		>
			{others.children}
		</div>
	);
};
