import * as stylex from '@stylexjs/stylex';
import { container, spacing } from '../../../token.stylex.ts';

export const styles = stylex.create({
	base: {
		maxWidth: '100%',
		paddingRight: spacing['5'],
		paddingLeft: spacing['5'],
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	xxl: {
		width: container.xxl,
	},
	xl: {
		width: container.xl,
	},
	lg: {
		width: container.lg,
	},
	md: {
		width: container.md,
	},
	sm: {
		width: container.sm,
	},
	xs: {},
});
