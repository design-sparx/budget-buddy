import { Container, ContainerProps } from '../../components/Container';
import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../../token.stylex.ts';
import { Button } from '../../components/Button';

const styles = stylex.create({
	base: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: spacing['4'],
		paddingBottom: spacing['4'],
		height: '600px',
	},
	content: {},
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
		gap: spacing['2'],
		marginTop: spacing['6'],
	},
	control: {
		textTransform: 'capitalize',
	},
});

export type HeroSectionProps = {
	style?: stylex.StyleXStyles;
} & Omit<ContainerProps, 'children'>;

export const Hero = ({ style, ...others }: HeroSectionProps) => {
	return (
		<Container>
			<div {...stylex.props(styles.base)} {...others}>
				<div>
					<h1 {...stylex.props(styles.title)}>bank that is always online</h1>
				</div>
				<div>
					<p {...stylex.props(styles.description)}>
						You can easily access your bank account balance on your mobile phone
						whenever you want to.
					</p>
					<div {...stylex.props(styles.actions)}>
						<Button variant="filled" size="lg" styles={styles.control}>
							open an account
						</Button>
						<Button variant="outline" size="lg" styles={styles.control}>
							explore more
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};
