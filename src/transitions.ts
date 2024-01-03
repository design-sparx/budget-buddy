import * as stylex from '@stylexjs/stylex';

export const enterFromRight = stylex.keyframes({
	from: { opacity: 0, transform: 'translateX(200px)' },
	to: { opacity: 1, transform: 'translateX(0)' },
});

export const enterFromLeft = stylex.keyframes({
	from: { opacity: 0, transform: 'translateX(-200px)' },
	to: { opacity: 1, transform: 'translateX(0)' },
});

export const exitToRight = stylex.keyframes({
	from: { opacity: 1, transform: 'translateX(0)' },
	to: { opacity: 0, transform: 'translateX(200px)' },
});

export const exitToLeft = stylex.keyframes({
	from: { opacity: 1, transform: 'translateX(0)' },
	to: { opacity: 0, transform: 'translateX(-200px)' },
});

export const scaleIn = stylex.keyframes({
	from: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
	to: { opacity: 1, transform: 'rotateX(0) scale(1)' },
});

export const scaleOut = stylex.keyframes({
	from: { opacity: 1, transform: 'rotateX(0) scale(1)' },
	to: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
});

export const fadeIn = stylex.keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
});

export const fadeOut = stylex.keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

export const overlayShow = stylex.keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
});

export const contentShow = stylex.keyframes({
	from: {
		opacity: 0,
		transform: 'translate(-50%, -48%) scale(0.96)',
	},
	to: {
		opacity: 1,
		transform: 'translate(-50%, -50%) scale(1)',
	},
});

export const slideUpAndFade = stylex.keyframes({
	from: {
		opacity: 0,
		transform: 'translateY(2px)',
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)',
	},
});

export const slideDownAndFade = stylex.keyframes({
	from: {
		opacity: 0,
		transform: 'translateY(-2px)',
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)',
	},
});
