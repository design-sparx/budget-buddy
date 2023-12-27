import * as stylex from '@stylexjs/stylex';

// what governs our colors
// https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale#use-cases
export const tokens = stylex.defineVars({
	// primary
	primaryBase: '',
	primaryBgSubtle: '',
	primaryBg: '',
	primaryBgHover: '',
	primaryBgActive: '',
	primaryLine: '',
	primaryBorder: '',
	primaryBorderHover: '',
	primarySolid: '',
	primarySolidHover: '',
	primaryText: '',
	primaryTextContrast: '',

	// success
	successBase: '',
	successBgSubtle: '',
	successBg: '',
	successBgHover: '',
	successBgActive: '',
	successLine: '',
	successBorder: '',
	successBorderHover: '',
	successSolid: '',
	successSolidHover: '',
	successText: '',
	successTextContrast: '',

	// warning
	warningBase: '',
	warningBgSubtle: '',
	warningBg: '',
	warningBgHover: '',
	warningBgActive: '',
	warningLine: '',
	warningBorder: '',
	warningBorderHover: '',
	warningSolid: '',
	warningSolidHover: '',
	warningText: '',
	warningTextContrast: '',

	// danger
	dangerBase: '',
	dangerBgSubtle: '',
	dangerBg: '',
	dangerBgHover: '',
	dangerBgActive: '',
	dangerLine: '',
	dangerBorder: '',
	dangerBorderHover: '',
	dangerSolid: '',
	dangerSolidHover: '',
	dangerText: '',
	dangerTextContrast: '',

	// gray - mauve
	grayBase: '',
	grayBgSubtle: '',
	grayBg: '',
	grayBgHover: '',
	grayBgActive: '',
	grayLine: '',
	grayBorder: '',
	grayBorderHover: '',
	graySolid: '',
	graySolidHover: '',
	grayText: '',
	grayTextContrast: '',

	fontFamily: '',
});

export const spacing = stylex.defineVars({
	1: '4px',
	2: '8px',
	3: '12px',
	4: '16px',
	5: '24px',
	6: '32px',
	7: '40px',
	8: '48px',
	9: '64px',
});

export const radius = stylex.defineVars({
	1: '4px',
	2: '8px',
	3: '12px',
	4: '16px',
	5: '24px',
	6: '32px',
	7: '40px',
	8: '48px',
	9: '64px',
});

export const fontSizes = stylex.defineVars({
	// displays
	display1: '5rem',
	display2: '4.5rem',
	display3: '4rem',
	display4: '3.5rem',
	display5: '3rem',
	display6: '2.5rem',

	// headings
	h1: '2.5rem',
	h2: '2rem',
	h3: '1.75rem',
	h4: '1.5rem',
	h5: '1.25rem',
	h6: '2rem',

	lead: '1.25rem',
});

export const container = stylex.defineVars({
	// displays
	xxl: '1320px',
	xl: '1140px',
	lg: '960px',
	md: '720px',
	sm: '540px',
	xs: '100%',

	fluid: '100%',
});

export const shadows = stylex.defineVars({
	none: 'none',
	sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
	md: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
	lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
});
