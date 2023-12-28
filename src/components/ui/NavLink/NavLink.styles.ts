import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: spacing['2'],
		color: tokens.grayText,
		fontWeight: 500,
		textTransform: 'capitalize',
		textDecoration: 'none',
		padding: `${spacing['2']} ${spacing['4']}`,
		borderRadius: spacing['6'],

		':hover': {
			backgroundColor: tokens.primaryBgHover,
			transition: 'all 250ms ease',
		},
	},
	active: {
		backgroundColor: tokens.primaryBgActive,
	},
});
