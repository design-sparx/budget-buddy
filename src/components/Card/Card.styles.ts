import * as stylex from '@stylexjs/stylex';
import { fontSizes, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		backgroundColor: tokens.grayBg,
		border: `1px solid ${tokens.grayBorder}`,
		color: tokens.grayText,
	},
	header: {},
	title: {
		fontSize: fontSizes.h5,
	},
	subtitle: {
		fontSize: fontSizes.h6,
	},
	body: {},
	footer: {},
	w: (width) => ({
		width,
	}),
});
