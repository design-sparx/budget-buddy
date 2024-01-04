import * as stylex from '@stylexjs/stylex';
import {
	fontSizes,
	radius,
	shadows,
	spacing,
	tokens,
} from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		backgroundColor: tokens.grayBg,
		color: tokens.grayText,
		padding: spacing['4'],
		borderRadius: radius['4'],
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {},
	title: {
		fontSize: fontSizes.h5,
		margin: 0,
		fontWeight: 500,
	},
	subtitle: {
		fontSize: fontSizes.h6,
		margin: 0,
	},
	body: {
		marginTop: spacing['4'],
		marginBottom: spacing['4'],
	},
	footer: {},
	w: (width) => ({
		width,
	}),
	shadowsm: {
		boxShadow: shadows.sm,
	},
	shadowmd: {
		boxShadow: shadows.md,
	},
	shadowlg: {
		boxShadow: shadows.lg,
	},
	border: {
		border: `1px solid ${tokens.grayBorder}`,
	},
});
