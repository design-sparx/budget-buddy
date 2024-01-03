import * as stylex from '@stylexjs/stylex';
import { ComponentProps, ReactNode } from 'react';
import { styles } from './Card.styles.ts';
import { BaseProps, IShadows } from '../../../types';

export type CardProps = {
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	bg?: stylex.StyleXStyles<{ backgroundColor?: string }>;
	header?: ReactNode;
	title?: ReactNode;
	subtitle?: ReactNode;
	footer?: ReactNode;
	extra?: ReactNode;
	img?: string;
	shadow?: IShadows;
	border?: boolean;
} & Partial<ComponentProps<'article'>> &
	BaseProps;

export const Card = (props: CardProps) => {
	const {
		bg,
		w,
		title,
		footer,
		extra,
		subtitle,
		border,
		shadow,
		header,
		sx,
		...others
	} = props;

	return (
		<article
			{...stylex.props(
				styles.base,
				styles.w(w),
				shadow && styles[`shadow${shadow}`],
				border && styles.border,
				sx
			)}
			{...others}
		>
			<div {...stylex.props(styles.header)}>
				<div {...stylex.props(styles.title)}>
					{header}
					{title}
					{subtitle}
				</div>
				{extra}
			</div>
			<div {...stylex.props(styles.body)}>{others.children}</div>
			<div {...stylex.props(styles.footer)}>{footer}</div>
		</article>
	);
};
