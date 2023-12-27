import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles as containerStyles } from './Container.styles.ts';
import { ISizes } from '../../types';

export type ContainerProps = {
	children: ReactNode;
	size?: Partial<ISizes>;
	styles?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Container = ({
	children,
	size,
	styles,
	...others
}: ContainerProps) => {
	return (
		<div
			{...stylex.props(
				containerStyles.base,
				size && containerStyles[size],
				styles
			)}
			{...others}
		>
			{children}
		</div>
	);
};
