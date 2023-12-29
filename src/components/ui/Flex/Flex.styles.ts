import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	base: {
		display: 'flex',
	},
	row: {
		flexDirection: 'row',
	},
	column: {
		flexDirection: 'column',
	},
	gap: (gap) => ({
		gap,
	}),
	alignstart: {
		alignItems: 'start',
	},
	alignstretch: {
		alignItems: 'stretch',
	},
	alignend: {
		alignItems: 'flex-end',
	},
	aligncenter: {
		alignItems: 'center',
	},
	justifybetween: {
		justifyContent: 'space-between',
	},
	justifyaround: {
		justifyContent: 'space-around',
	},
	justifyeven: {
		justifyContent: 'space-evenly',
	},
	justifycenter: {
		justifyContent: 'center',
	},
	justifystart: {
		justifyContent: 'flex-start',
	},
	justifyend: {
		justifyContent: 'flex-end',
	},
});
