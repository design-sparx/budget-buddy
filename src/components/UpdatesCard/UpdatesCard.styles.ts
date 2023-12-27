import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		padding: spacing['4'],
	},
	content: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: spacing['4'],
	},
	title: {
		fontSize: fontSizes.h5,
		fontWeight: 400,
	},
	image: {
		width: '100%',
		height: 200,
		objectFit: 'contain',
	},
});
