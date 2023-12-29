import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../../../token.stylex';

export const styles = stylex.create({
	base: {
		width: '100%',
		textAlign: 'left',
		verticalAlign: 'top',
		borderCollapse: 'collapse',
		borderRadius: '0',
		borderSpacing: 0,
		boxSizing: 'border-box',
		backgroundColor: 'transparent',
		boxShadow: `inset 0 -1px ${tokens.grayBgActive}`,
	},
	header: {
		fontWeight: 500,
	},
	row: {
		color: tokens.grayText,
		boxShadow: `inset 0 -1px ${tokens.grayBgActive}`,
	},
	cell: {
		padding: spacing['3'],
		height: '44px',
	},
	footer: {
		padding: `${spacing['4']} 0`,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
