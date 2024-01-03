import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		paddingTop: spacing['9'],
		paddingBottom: spacing['9'],
		height: '500px',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: spacing['6'],
	},
	title: {
		fontSize: fontSizes.display1,
		fontWeight: 300,
		color: tokens.grayText,
		margin: 0,
		textTransform: 'capitalize',
	},
	description: {
		fontSize: fontSizes.lead,
		color: tokens.grayText,
	},
	actions: {
		display: 'flex',
		gap: spacing['4'],
		marginTop: spacing['6'],
	},
	control: {
		textTransform: 'capitalize',
	},
});
