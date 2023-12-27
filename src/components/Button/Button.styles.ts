import * as stylex from '@stylexjs/stylex';
import { radius, tokens } from '../../token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

export const styles = stylex.create({
	base: {
		border: '2px solid transparent',
		fontWeight: 500,
		color: tokens.primaryText,
		borderRadius: radius['7'],
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
		fontSize: '20px',
		padding: '8px 16px',
	},
	md: {
		fontSize: '16px',
		padding: '6px 12px',
	},
	sm: {
		fontSize: '14px',
		padding: '4px 8px',
	},
	xs: {},
	w: (width) => ({
		width,
	}),
});
