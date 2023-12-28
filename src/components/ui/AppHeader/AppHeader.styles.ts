import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		gap: spacing['2'],
		padding: `${spacing['2']} ${spacing['4']}`,
		color: tokens.grayText,
	},
	h: (height) => ({
		height,
	}),
	pageName: {
		margin: 0,
		fontSize: fontSizes.h5,
		fontWeight: 500,
		textTransform: 'capitalize',
	},
	controls: {
		alignItems: 'center',
		gap: spacing['2'],
	},
});
