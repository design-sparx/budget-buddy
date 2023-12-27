import * as stylex from '@stylexjs/stylex';
import { fontSizes, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		color: tokens.primaryText,

		':hover': {
			cursor: 'pointer',
		},
	},
	text: {
		fontSize: fontSizes.h5,
		fontWeight: 500,
		margin: 0,
		textTransform: 'capitalize',
	},
});
