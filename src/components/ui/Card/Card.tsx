import * as stylex from '@stylexjs/stylex';
import { ComponentProps, ReactNode } from 'react';
import { styles } from './Card.styles.ts';
import { IShadows } from '../../../types';

export type CardProps = {
	children: ReactNode;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	bg?: stylex.StyleXStyles<{ backgroundColo?: string }>;
	title?: ReactNode;
	subtitle?: ReactNode;
	footer?: ReactNode;
	extra?: any;
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
					{title}
					{subtitle}
				</div>
				{extra}
			</div>
			<div {...stylex.props(styles.body)}>{children}</div>
			<div {...stylex.props(styles.footer)}>{footer}</div>
		</article>
	);
};
