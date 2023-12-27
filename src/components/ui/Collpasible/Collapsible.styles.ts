import * as stylex from '@stylexjs/stylex';
import { fontSizes, radius, spacing, tokens } from '../../../token.stylex.ts';

const scaleIn = stylex.keyframes({
	from: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
	to: { opacity: 1, transform: 'rotateX(0) scale(1)' },
});

const scaleOut = stylex.keyframes({
	from: { opacity: 1, transform: 'rotateX(0) scale(1)' },
	to: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
});

export const styles = stylex.create({
	base: {
		backgroundColor: tokens.grayBg,
		color: tokens.grayText,
		borderRadius: radius['4'],

		":is([data-state='open'])": {
			backgroundColor: tokens.primaryBgActive,
		},
	},
	body: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	content: {
		padding: spacing['4'],
		transition: 'height 300ms linear',

		":is([data-state='open'])": {
			animationName: scaleIn,
			animationDuration: '200ms',
		},

		":is([data-state='closed'])": {
			animationName: scaleOut,
			animationDuration: '200ms',
		},
	},
	control: {
		padding: spacing['4'],
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		fontSize: fontSizes.h5,
		fontWeight: 500,
		borderRadius: radius['4'],

		':hover': {
			cursor: 'pointer',
			color: tokens.primaryText,
			transition: 'all 250ms ease',
			backgroundColor: tokens.primaryBg,
		},
	},
	iconButton: {
		borderRadius: '100%',
		height: '25px',
		width: '25px',
		display: 'inline-flex',
		alignItems: 'center',
	},
	text: {
		color: tokens.grayText,
	},
});
