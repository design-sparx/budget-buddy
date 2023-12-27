import * as stylex from '@stylexjs/stylex';
import { ComponentProps, ReactNode } from 'react';
import { styles } from './Card.styles.ts';
import { IShadows } from '../../../types';

export type CardProps = {
	children: ReactNode;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	bg?: stylex.StyleXStyles<{ backgroundColo?: string }>;
	title?: string;
	subtitle?: string;
	footer?: ReactNode;
	extra?: ReactNode;
	img?: string;
	shadow?: IShadows;
	border?: boolean;
	sx?: stylex.StyleXStyles;
} & ComponentProps<'article'>;

export const Card = (props: CardProps) => {
	const {
		children,
		bg,
		w,
		title,
		footer,
		extra,
		subtitle,
		border,
		shadow,
		sx,
		...others
	} = props;

	return (
		<article
			{...others}
			{...stylex.props(
				styles.base,
				styles.w(w),
				shadow && styles[`shadow${shadow}`],
				border && styles.border,
				sx
			)}
		>
			<div {...stylex.props(styles.header)}>
				<div>
					<h5 {...stylex.props(styles.title)}>{title}</h5>
					<h6 {...stylex.props(styles.subtitle)}>{subtitle}</h6>
				</div>
				<div>{extra}</div>
			</div>
			{children}
			<div {...stylex.props(styles.footer)}>{footer}</div>
		</article>
	);
};
