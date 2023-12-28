import * as stylex from '@stylexjs/stylex';
import { radius, spacing, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing['2'],
		color: tokens.grayText,
		padding: `${spacing['2']} ${spacing['2']}`,
		borderRadius: radius['6'],

		':hover': {
			cursor: 'pointer',
			backgroundColor: tokens.primaryBgHover,
			transition: 'all 200ms ease',
		},
	},
	img: {
		height: spacing['5'],
		width: spacing['5'],
		objectFit: 'cover',
		borderRadius: '50%',
	},
});
