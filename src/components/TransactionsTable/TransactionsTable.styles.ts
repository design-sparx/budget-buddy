import * as stylex from '@stylexjs/stylex';
import { radius } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {},
	name: {
		alignItems: 'center',
	},
	img: {
		height: radius['5'],
		width: radius['5'],
		objectFit: 'contain',
	},
});
