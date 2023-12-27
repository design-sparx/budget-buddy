import * as stylex from '@stylexjs/stylex';
import { tokens } from '../../token.stylex.ts';

const scaleIn = stylex.keyframes({
	from: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
	to: { opacity: 1, transform: 'rotateX(0) scale(1)' },
});

const scaleOut = stylex.keyframes({
	from: { opacity: 1, transform: 'rotateX(0) scale(1)' },
	to: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
});

const enterFromRight = stylex.keyframes({
	from: { opacity: 0, transform: 'translateX(200px)' },
	to: { opacity: 1, transform: 'translateX(0)' },
});

const enterFromLeft = stylex.keyframes({
	from: { opacity: 0, transform: 'translateX(-200px)' },
	to: { opacity: 1, transform: 'translateX(0)' },
});

const exitToRight = stylex.keyframes({
	from: { opacity: 1, transform: 'translateX(0)' },
	to: { opacity: 0, transform: 'translateX(200px)' },
});

const exitToLeft = stylex.keyframes({
	from: { opacity: 1, transform: 'translateX(0)' },
	to: { opacity: 0, transform: 'translateX(-200px)' },
});

export const styles = stylex.create({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: '100vw',
		backgroundColor: tokens.primaryBg,
		zIndex: 1,
		padding: '0 16px',
	},
	list: {
		display: 'flex',
		listStyle: 'none',
		alignItems: 'center',
		gap: '4px',
	},
	link: {
		padding: '8px 12px',
		outline: 'none',
		userSelect: 'none',
		fontWeight: 500,
		borderRadius: '4px',
		fontSize: '16px',
		lineHeight: 1,
		color: tokens.primaryText,
		textTransform: 'capitalize',
		display: 'flex',
		alignItems: 'center',
		gap: '2px',

		':hover': {
			backgroundColor: tokens.primaryBgHover,
		},
	},
	content: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		animationDuration: '250ms',
		animationTimingFunction: 'ease',

		":is([data-motion='from-start'])": {
			animationName: enterFromLeft,
		},
		":is([data-motion='from-end'])": {
			animationName: enterFromRight,
		},
		":is([data-motion='to-start'])": {
			animationName: exitToLeft,
		},
		":is([data-motion='to-end'])": {
			animationName: exitToRight,
		},
	},
	viewport: {
		position: 'relative',
		transformOrigin: 'top center',
		marginTop: '10px',
		width: '500px',
		backgroundColor: tokens.primaryBgHover,
		borderRadius: '6px',
		overflow: 'hidden',
		boxShadow:
			'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
		height: 'var(--radix-navigation-menu-viewport-height)',
		transition: 'width, height, 300ms ease',

		":is([data-state='open'])": {
			animationName: scaleIn,
			animationDuration: '200ms',
		},

		":is([data-state='closed'])": {
			animationName: scaleOut,
			animationDuration: '200ms',
		},
	},
	viewportPosition: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		top: '5%',
		left: 0,
		perspective: '2000px',
	},
	menuList: {
		display: 'grid',
		padding: '22px',
		margin: 0,
		columnGap: '10px',
		listStyle: 'none',
		gridAutoFlow: 'column',
		gridTemplateRows: 'repeat(2, 1fr)',
	},
	menuListLink: {
		display: 'block',
		outline: 'none',
		textDecoration: 'none',
		userSelect: 'none',
		padding: '12px',
		borderRadius: '6px',
		fontSize: '16px',
		lineHeight: 1,

		':hover': {
			backgroundColor: tokens.primaryBgActive,
		},
	},
	menuListHeading: {
		fontWeight: 500,
		lineHeight: 1.2,
		marginBottom: '8px',
		color: tokens.primaryText,
	},
	menuListText: {
		color: tokens.primaryText,
		lineHeight: 1.4,
		fontWeight: 'initial',
		fontSize: '14px',
	},
	menuIcon: {
		position: 'relative',
		color: tokens.primaryText,
		// top: '1px',
		transition: 'transform 250ms ease',

		":is([data-state='open'])": {
			transform: 'rotate(-180deg)',
		},
	},
});
