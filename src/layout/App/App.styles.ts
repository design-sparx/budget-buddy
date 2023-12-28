import * as stylex from '@stylexjs/stylex';
import { tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		backgroundColor: tokens.primaryBase,
		display: 'flex',
		alignItems: 'stretch',
		textDecoration: 'none',
		minHeight: '100dvh',
		width: '100dvw',
		overflowX: 'hidden',

		':hover': {
			cursor: 'pointer',
		},
	},
	sidebar: {
		backgroundColor: tokens.primaryBgSubtle,
	},
	header: {},
	main: {
		width: `calc(100% - 300px)`,
		backgroundColor: tokens.primarySolid,
	},
});
