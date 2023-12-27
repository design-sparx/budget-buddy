import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Container.styles.ts';
import { ISizes } from '../../../types';

export type ContainerProps = {
	children: ReactNode;
	size?: Partial<ISizes>;
	sx?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Container = ({
	children,
	size,
	sx,
	...others
}: ContainerProps) => {
	return (
		<div {...stylex.props(styles.base, size && styles[size], sx)} {...others}>
			{children}
		</div>
	);
};
