import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import { styles } from './Flex.styles.ts';
import { spacing } from '../../../token.stylex.ts';

export type FlexProps = {
	direction?: 'row' | 'column';
	gap?: string | number;
	sx?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Flex = (props: FlexProps) => {
	const { sx, direction = 'row', gap = spacing['2'], ...others } = props;

	return (
		<div
			{...stylex.props(
				styles.base,
				direction && styles[direction],
				styles.gap(gap),
				sx
			)}
		>
			{others.children}
		</div>
	);
};
