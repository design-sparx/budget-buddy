import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		backgroundColor: tokens.primaryBg,
	},
	item: {
		padding: `${spacing['2']} 0`,
		borderBottom: `1px solid ${tokens.grayBorder}`,
	},
});
