import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../../token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

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
		padding: `${spacing['2']} ${spacing['4']}`,
		width: `calc(100% - 300px)`,
	},
	children: {
		padding: `${spacing['4']} 0`,
	},
	w: (width) => ({
		width,
	}),
	mobileLink: {
		color: {
			default: 'black',
			[DARK]: 'white',
		},
		paddingLeft: 0,

		':hover': {
			textDecoration: 'underline',
		},
	},
	mobileLinkActive: {
		textDecoration: 'underline',
	},
});
