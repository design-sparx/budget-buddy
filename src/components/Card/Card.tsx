import * as stylex from '@stylexjs/stylex';
import { ComponentProps, ReactNode } from 'react';
import { styles } from './Card.styles.ts';

export type CardProps = {
	children: ReactNode;
	w?: stylex.StyleXStyles<{ width?: string | number }>;
	bg?: stylex.StyleXStyles<{ backgroundColo?: string }>;
	header?: string;
	title?: string;
	subtitle?: string;
	footer?: ReactNode;
	extra?: ReactNode;
	img?: string;
} & ComponentProps<'article'>;

export const Card = (props: CardProps) => {
	const { children, bg, w, title, header, footer, extra, subtitle, ...others } =
		props;

	return (
		<article {...others} {...stylex.props(styles.base, styles.w(w))}>
			<div {...stylex.props(styles.header)}>
				{header ? (
					header
				) : (
					<div>
						<h5 {...stylex.props(styles.title)}>{title}</h5>
						<h6 {...stylex.props(styles.subtitle)}>{subtitle}</h6>
					</div>
				)}
				<div>{extra}</div>
			</div>
			{children}
			<div {...stylex.props(styles.footer)}>{footer}</div>
		</article>
	);
};
