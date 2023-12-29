import * as stylex from '@stylexjs/stylex';
import { radius, spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		boxShadow: `0 0 0 1px ${tokens.grayBorder}`,
		borderRadius: radius['6'],
		padding: `${spacing['1']} ${spacing['4']}`,

		':focus-within': {
			boxShadow: `0 0 0 2.5px ${tokens.primaryBgActive}`,
			transition: 'all 250ms ease',
		},
	},
	slot: {
		paddingLeft: spacing['2'],
		paddingRight: spacing['2'],
		flexShrink: 1,
		position: 'relative',
	},
	label: {
		fontWeight: 400,
		lineHeight: '35px',
		color: tokens.grayText,
	},
	input: {
		height: spacing['6'],
		paddingBottom: '1px',
		appearance: 'none',
		outline: 'none',
		backgroundColor: 'transparent',
		border: '1px solid transparent',
		lineHeight: 1,
	},
	w: (width) => ({
		width,
	}),
	sm: {
		fontSize: spacing['3'],
	},
	md: {
		fontSize: spacing['4'],
	},
	lg: {
		fontSize: spacing['5'],
	},
	default: {
		background: 'transparent',
	},
	subtle: {
		backgroundColor: tokens.grayBg,
	},
});
