import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		color: tokens.primaryText,
		display: 'flex',
		alignItems: 'center',
		gap: spacing['2'],
		textDecoration: 'none',

		':hover': {
			cursor: 'pointer',
		},
	},
	icon: {
		height: spacing['5'],
		width: spacing['5'],
	},
	text: {
		fontSize: fontSizes.h5,
		fontWeight: 500,
		margin: 0,
		textTransform: 'capitalize',
	},
});
