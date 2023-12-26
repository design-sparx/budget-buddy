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
