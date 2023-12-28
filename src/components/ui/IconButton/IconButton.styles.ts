import * as stylex from '@stylexjs/stylex';
import { radius, spacing, tokens } from '../../../token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

export const styles = stylex.create({
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing['2'],
		color: tokens.primaryText,
		border: '2px solid transparent',
		borderRadius: radius['7'],
		fontWeight: 500,
		textDecoration: 'none',

		':hover': {
			cursor: 'pointer',
			transition: 'all 250ms ease',
		},
	},
	default: {
		backgroundColor: {
			default: 'white',
			[DARK]: 'black',
		},
	},
	filled: {
		color: {
			default: 'white',
			[DARK]: 'black',
		},
		backgroundColor: {
			default: tokens.primarySolid,
			':hover': tokens.primarySolidHover,
			':focus-within': tokens.primarySolidHover,
		},
	},
	subtle: {
		color: tokens.primaryText,
		backgroundColor: {
			default: 'transparent',
			':hover': tokens.primaryBgHover,
		},
	},
	outline: {
		color: {
			default: tokens.primaryText,
			':hover': 'white',
		},
		backgroundColor: {
			default: 'transparent',
			':hover': tokens.primarySolid,
			':focus-within': tokens.primarySolid,
		},
		borderColor: tokens.primarySolid,
	},
	transparent: {
		color: {
			default: 'black',
			[DARK]: 'white',
		},
		backgroundColor: 'transparent',
	},
	danger: {
		color: {
			default: 'white',
			[DARK]: 'black',
		},
		backgroundColor: {
			default: tokens.dangerSolid,
			':hover': tokens.dangerSolidHover,
			':focus-within': tokens.dangerSolidHover,
		},
	},
	xxl: {},
	xl: {},
	lg: {
		padding: spacing['3'],
	},
	md: {
		height: 14,
		width: 14,
		padding: spacing['1'],
	},
	sm: {
		padding: spacing['1'],
	},
	xs: {},
	w: (width) => ({
		width,
	}),
	h: (height) => ({
		height,
	}),
});
