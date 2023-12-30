import * as stylex from '@stylexjs/stylex';
import { styles } from './List.styles.ts';
import { BaseProps } from '../../../types';
import { Flex, FlexProps } from '../Flex';

export type ListProps = { items: any[] } & Partial<FlexProps> & BaseProps;

export const List = ({ items, sx, ...others }: ListProps) => {
	return (
		<Flex {...stylex.props(styles.base, sx)} {...others}>
			{items.map((item) => (
				<div {...stylex.props(styles.item)}>{item}</div>
			))}
		</Flex>
	);
};
