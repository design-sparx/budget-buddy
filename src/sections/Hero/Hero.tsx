import * as stylex from '@stylexjs/stylex';
import { Button, Flex } from '../../components/ui';
import { PATH_APP } from '../../constants/routes.ts';
import { Link } from 'wouter';
import { Col, Container, Row } from 'react-grid-system';
import { BaseProps } from '../../types';
import { styles } from './Hero.styles.ts';

export type HeroSectionProps = BaseProps;

export const Hero = ({ sx }: HeroSectionProps) => {
	return (
		<Container>
			<Row {...stylex.props(styles.base, sx)}>
				<Col lg={6} {...stylex.props(styles.content)}>
					<h1 {...stylex.props(styles.title)}>bank that is always online</h1>
				</Col>
				<Col lg={6} {...stylex.props(styles.content)}>
					<p {...stylex.props(styles.description)}>
						You can easily access your bank account balance on your mobile phone
						whenever you want to.
					</p>
					<Flex>
						<Link href={PATH_APP.root}>
							<Button variant="filled" size="lg" sx={styles.control}>
								open an account
							</Button>
						</Link>
						<Button variant="outline" size="lg" sx={styles.control}>
							explore more
						</Button>
					</Flex>
				</Col>
			</Row>
		</Container>
	);
};
