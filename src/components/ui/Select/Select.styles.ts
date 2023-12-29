import * as stylex from '@stylexjs/stylex';
import { fontSizes, radius, spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {},
	formLabel: {
		fontWeight: 400,
		lineHeight: '35px',
		color: tokens.grayText,
	},
	trigger: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: radius['6'],
		padding: `0 ${spacing['4']}`,
		fontSize: fontSizes.normal,
		lineHeight: 1,
		height: '36px',
		gap: spacing['2'],
		backgroundColor: 'transparent',
		color: tokens.grayText,
		boxShadow: `0 0 0 1px ${tokens.grayBorder}`,

		':hover': {
			boxShadow: `0 0 0 2.5px ${tokens.primaryBgActive}`,
			transition: 'all 250ms ease',
		},
		':focus': {
			boxShadow: `0 0 0 2.5px ${tokens.primaryBgActive}`,
		},
		':is([data-placeholder])': {
			color: tokens.graySolid,
		},
	},
	icon: {
		color: tokens.grayText,
	},
	content: {
		overflow: 'hidden',
		backgroundColor: 'white',
		border: `1px solid ${tokens.grayBorder}`,
		borderRadius: radius['2'],
		boxShadow:
			'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
	},
	scrollButton: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: spacing['5'],
		backgroundColor: 'white',
		color: tokens.grayText,
		cursor: 'default',
	},
	viewport: {
		padding: spacing['2'],
	},
	selectLabel: {
		padding: `0 ${spacing['5']}`,
		fontSize: '12px',
		lineHeight: '12px',
		color: tokens.grayText,
	},
	separator: {
		height: '1px',
		backgroundColor: tokens.grayLine,
		margin: spacing['2'],
	},
	item: {
		fontSize: fontSizes.normal,
		lineHeight: '1px',
		borderRadius: spacing['6'],
		display: 'flex',
		alignItems: 'center',
		gap: spacing['2'],
		height: spacing['5'],
		padding: `0 ${spacing['6']} 0 ${spacing['5']}`,
		position: 'relative',
		userSelect: 'none',

		":is([data-disabled='true'])": {
			color: tokens.grayBorderHover,
			pointerEvents: 'none',
		},
		":is([data-highlighted='true'])": {
			outline: 'none',
			backgroundColor: tokens.primarySolid,
			color: tokens.primaryBase,
		},
	},
	indicator: {
		position: 'absolute',
		left: 0,
		width: '25px',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollAreaRoot: {
		width: '100%',
		height: '100%',
	},
	scrollAreaViewport: {
		width: '100%',
		height: '100%',
	},
	scrollAreaScrollbar: {
		width: spacing['2'],
		padding: `${spacing['4']} ${spacing['2']}`,
	},
	scrollAreaThumb: {
		background: `rgba(0, 0, 0, 0.3)`,
		borderRadius: radius['2'],
	},
});
