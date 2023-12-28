import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		flexDirection: 'column',
		gap: spacing['2'],
		padding: spacing['4'],
	},
	w: (width) => ({
		width,
	}),
	brand: { marginBottom: spacing['2'] },
	links: {},
});
