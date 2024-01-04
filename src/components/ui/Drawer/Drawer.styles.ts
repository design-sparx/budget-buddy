import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../../token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

const contentShow = stylex.keyframes({
	from: {
		opacity: 0,
		transform: 'translate(-50%, -48%) scale(0.96)',
	},
	to: {
		opacity: 1,
		transform: 'translate(-50%, -50%) scale(1)',
	},
});

const overlayShow = stylex.keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
});

export const styles = stylex.create({
	base: {},
	overlay: {
		backgroundColor: tokens.primaryBgSubtle,
		position: 'fixed',
		inset: 0,
		animationName: overlayShow,
		animationDuration: '150ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	},
	content: {
		backgroundColor: {
			default: 'white',
			[DARK]: 'black',
		},
		borderRadius: 0,
		boxShadow:
			'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
		position: 'fixed',
		top: '0%',
		left: '0%',
		width: '300px',
		maxWidth: '450px',
		height: '100dvh',
		padding: '25px',
		animationName: contentShow,
		animationDuration: '150ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

		':focus': {
			outline: 'none',
		},
	},
	title: {
		margin: `0 0 ${spacing['4']} 0`,
		fontWeight: 500,
		color: {
			default: 'black',
			[DARK]: 'white',
		},
		fontSize: fontSizes.h5,
	},
	description: {
		margin: '10px 0 20px',
		color: {
			default: 'black',
			[DARK]: 'white',
		},
		fontSize: fontSizes.normal,
		lineHeight: 1.5,
	},
	closeButton: {
		position: 'absolute',
		top: '10px',
		right: '10px',
	},
	w: (width) => ({
		width,
	}),
});
