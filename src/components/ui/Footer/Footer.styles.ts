import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: '100vw',
		backgroundColor: tokens.primaryBgSubtle,
		zIndex: 1,
		padding: spacing['4'],
		marginTop: spacing['6'],
	},
	actions: {
		display: 'flex',
		gap: spacing['4'],
		color: tokens.primaryText,
	},
});
