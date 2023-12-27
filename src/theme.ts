import * as stylex from '@stylexjs/stylex';
import { tokens } from './token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

// using sage colors
const jade = {
	jade1: '#fbfefd',
	jade2: '#f4fbf7',
	jade3: '#e6f7ed',
	jade4: '#d6f1e3',
	jade5: '#c3e9d7',
	jade6: '#acdec8',
	jade7: '#8bceb6',
	jade8: '#56ba9f',
	jade9: '#29a383',
	jade10: '#26997b',
	jade11: '#208368',
	jade12: '#1d3b31',
};

const jadeDark = {
	jade1: '#0d1512',
	jade2: '#121c18',
	jade3: '#0f2e22',
	jade4: '#0b3b2c',
	jade5: '#114837',
	jade6: '#1b5745',
	jade7: '#246854',
	jade8: '#2a7e68',
	jade9: '#29a383',
	jade10: '#27b08b',
	jade11: '#1fd8a4',
	jade12: '#adf0d4',
};

const yellow = {
	yellow1: '#fdfdf9',
	yellow2: '#fefce9',
	yellow3: '#fffab8',
	yellow4: '#fff394',
	yellow5: '#ffe770',
	yellow6: '#f3d768',
	yellow7: '#e4c767',
	yellow8: '#d5ae39',
	yellow9: '#ffe629',
	yellow10: '#ffdc00',
	yellow11: '#9e6c00',
	yellow12: '#473b1f',
};

const yellowDark = {
	yellow1: '#14120b',
	yellow2: '#1b180f',
	yellow3: '#2d2305',
	yellow4: '#362b00',
	yellow5: '#433500',
	yellow6: '#524202',
	yellow7: '#665417',
	yellow8: '#836a21',
	yellow9: '#ffe629',
	yellow10: '#ffff57',
	yellow11: '#f5e147',
	yellow12: '#f6eeb4',
};

const red = {
	red1: '#fffcfc',
	red2: '#fff7f7',
	red3: '#feebec',
	red4: '#ffdbdc',
	red5: '#ffcdce',
	red6: '#fdbdbe',
	red7: '#f4a9aa',
	red8: '#eb8e90',
	red9: '#e5484d',
	red10: '#dc3e42',
	red11: '#ce2c31',
	red12: '#641723',
};

const redDark = {
	red1: '#191111',
	red2: '#201314',
	red3: '#3b1219',
	red4: '#500f1c',
	red5: '#611623',
	red6: '#72232d',
	red7: '#8c333a',
	red8: '#b54548',
	red9: '#e5484d',
	red10: '#ec5d5e',
	red11: '#ff9592',
	red12: '#ffd1d9',
};

const green = {
	green1: '#fbfefc',
	green2: '#f4fbf6',
	green3: '#e6f6eb',
	green4: '#d6f1df',
	green5: '#c4e8d1',
	green6: '#adddc0',
	green7: '#8eceaa',
	green8: '#5bb98b',
	green9: '#30a46c',
	green10: '#2b9a66',
	green11: '#218358',
	green12: '#193b2d',
};

const greenDark = {
	green1: '#0e1512',
	green2: '#121b17',
	green3: '#132d21',
	green4: '#113b29',
	green5: '#174933',
	green6: '#20573e',
	green7: '#28684a',
	green8: '#2f7c57',
	green9: '#30a46c',
	green10: '#33b074',
	green11: '#3dd68c',
	green12: '#b1f1cb',
};

const mauve = {
	mauve1: '#fdfcfd',
	mauve2: '#faf9fb',
	mauve3: '#f2eff3',
	mauve4: '#eae7ec',
	mauve5: '#e3dfe6',
	mauve6: '#dbd8e0',
	mauve7: '#d0cdd7',
	mauve8: '#bcbac7',
	mauve9: '#8e8c99',
	mauve10: '#84828e',
	mauve11: '#65636d',
	mauve12: '#211f26',
};

const mauveDark = {
	mauve1: '#121113',
	mauve2: '#1a191b',
	mauve3: '#232225',
	mauve4: '#2b292d',
	mauve5: '#323035',
	mauve6: '#3c393f',
	mauve7: '#49474e',
	mauve8: '#625f69',
	mauve9: '#6f6d78',
	mauve10: '#7c7a85',
	mauve11: '#b5b2bc',
	mauve12: '#eeeef0',
};

export const jadeTheme = stylex.createTheme(tokens, {
	primaryBase: { default: jade.jade1, [DARK]: jadeDark.jade1 },
	primaryBgSubtle: { default: jade.jade2, [DARK]: jadeDark.jade2 },
	primaryBg: { default: jade.jade3, [DARK]: jadeDark.jade3 },
	primaryBgHover: { default: jade.jade4, [DARK]: jadeDark.jade4 },
	primaryBgActive: { default: jade.jade5, [DARK]: jadeDark.jade5 },
	primaryLine: { default: jade.jade6, [DARK]: jadeDark.jade6 },
	primaryBorder: { default: jade.jade7, [DARK]: jadeDark.jade7 },
	primaryBorderHover: { default: jade.jade8, [DARK]: jadeDark.jade8 },
	primarySolid: { default: jade.jade9, [DARK]: jadeDark.jade9 },
	primarySolidHover: { default: jade.jade10, [DARK]: jadeDark.jade10 },
	primaryText: { default: jade.jade11, [DARK]: jadeDark.jade11 },
	primaryTextContrast: { default: jade.jade12, [DARK]: jadeDark.jade12 },

	// success
	successBase: { default: green.green1, [DARK]: greenDark.green1 },
	successBgSubtle: { default: green.green2, [DARK]: greenDark.green2 },
	successBg: { default: green.green3, [DARK]: greenDark.green3 },
	successBgHover: { default: green.green4, [DARK]: greenDark.green4 },
	successBgActive: { default: green.green5, [DARK]: greenDark.green5 },
	successLine: { default: green.green6, [DARK]: greenDark.green6 },
	successBorder: { default: green.green7, [DARK]: greenDark.green7 },
	successBorderHover: { default: green.green8, [DARK]: greenDark.green8 },
	successSolid: { default: green.green9, [DARK]: greenDark.green9 },
	successSolidHover: { default: green.green10, [DARK]: greenDark.green10 },
	successText: { default: green.green11, [DARK]: greenDark.green11 },
	successTextContrast: { default: green.green12, [DARK]: greenDark.green12 },

	// warning
	warningBase: { default: yellow.yellow1, [DARK]: yellowDark.yellow1 },
	warningBgSubtle: { default: yellow.yellow2, [DARK]: yellowDark.yellow2 },
	warningBg: { default: yellow.yellow3, [DARK]: yellowDark.yellow3 },
	warningBgHover: { default: yellow.yellow4, [DARK]: yellowDark.yellow4 },
	warningBgActive: { default: yellow.yellow5, [DARK]: yellowDark.yellow5 },
	warningLine: { default: yellow.yellow6, [DARK]: yellowDark.yellow6 },
	warningBorder: { default: yellow.yellow7, [DARK]: yellowDark.yellow7 },
	warningBorderHover: { default: yellow.yellow8, [DARK]: yellowDark.yellow8 },
	warningSolid: { default: yellow.yellow9, [DARK]: yellowDark.yellow9 },
	warningSolidHover: { default: yellow.yellow10, [DARK]: yellowDark.yellow10 },
	warningText: { default: yellow.yellow11, [DARK]: yellowDark.yellow11 },
	warningTextContrast: {
		default: yellow.yellow12,
		[DARK]: yellowDark.yellow12,
	},

	// danger
	dangerBase: { default: red.red1, [DARK]: redDark.red1 },
	dangerBgSubtle: { default: red.red2, [DARK]: redDark.red2 },
	dangerBg: { default: red.red3, [DARK]: redDark.red3 },
	dangerBgHover: { default: red.red4, [DARK]: redDark.red4 },
	dangerBgActive: { default: red.red5, [DARK]: redDark.red5 },
	dangerLine: { default: red.red6, [DARK]: redDark.red6 },
	dangerBorder: { default: red.red7, [DARK]: redDark.red7 },
	dangerBorderHover: { default: red.red8, [DARK]: redDark.red8 },
	dangerSolid: { default: red.red9, [DARK]: redDark.red9 },
	dangerSolidHover: { default: red.red10, [DARK]: redDark.red10 },
	dangerText: { default: red.red11, [DARK]: redDark.red11 },
	dangerTextContrast: { default: red.red12, [DARK]: redDark.red12 },

	// gray - mauve
	grayBase: { default: mauve.mauve1, [DARK]: mauveDark.mauve1 },
	grayBgSubtle: { default: mauve.mauve2, [DARK]: mauveDark.mauve2 },
	grayBg: { default: mauve.mauve3, [DARK]: mauveDark.mauve3 },
	grayBgHover: { default: mauve.mauve4, [DARK]: mauveDark.mauve4 },
	grayBgActive: { default: mauve.mauve5, [DARK]: mauveDark.mauve5 },
	grayLine: { default: mauve.mauve6, [DARK]: mauveDark.mauve6 },
	grayBorder: { default: mauve.mauve7, [DARK]: mauveDark.mauve7 },
	grayBorderHover: { default: mauve.mauve8, [DARK]: mauveDark.mauve8 },
	graySolid: { default: mauve.mauve9, [DARK]: mauveDark.mauve9 },
	graySolidHover: { default: mauve.mauve10, [DARK]: mauveDark.mauve10 },
	grayText: { default: mauve.mauve11, [DARK]: mauveDark.mauve11 },
	grayTextContrast: { default: mauve.mauve12, [DARK]: mauveDark.mauve12 },

	fontFamily: 'Open Sans',
});
