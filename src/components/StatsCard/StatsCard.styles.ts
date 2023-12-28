import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	title: {
		fontSize: fontSizes.h6,
		textTransform: 'capitalize',
		fontWeight: 500,
	},
	extra: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing['1'],
	},
	plusDiff: {
		color: tokens.successText,
	},
	minusDiff: {
		color: tokens.dangerText,
	},
	amount: {
		fontSize: fontSizes.h4,
		fontWeight: 500,
	},
});
