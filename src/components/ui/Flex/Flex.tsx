import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';
import { styles } from './Flex.styles.ts';

export type FlexProps = {
	sx?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Flex = (props: FlexProps) => {
	const { sx, ...others } = props;

	return <div {...stylex.props(styles.base, sx)}>{others.children}</div>;
};
