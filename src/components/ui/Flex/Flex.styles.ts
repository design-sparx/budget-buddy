import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	base: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	row: {
		flexDirection: 'row',
	},
	column: {
		flexDirection: 'column',
	},
	gap: (gap: string | number) => ({
		gap,
	}),
});
