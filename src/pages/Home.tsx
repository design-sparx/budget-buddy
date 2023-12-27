import { GuestLayout } from '../layout';
import { HeroSection } from '../sections/Hero';
import { Container, Col, Row } from 'react-grid-system';
import { Button, Card, Collapsible } from '../components/ui';
import * as stylex from '@stylexjs/stylex';
import { Flex } from '../components/ui/Flex';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { fontSizes, spacing } from '../token.stylex.ts';

export const styles = stylex.create({
	card: {
		marginBottom: spacing['4'],
	},
	cardBody: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: spacing['3'],
	},
	cardTitle: {
		fontSize: fontSizes.h6,
		fontWeight: 400,
	},
	cardImg: {
		width: '100%',
		height: 200,
		objectFit: 'contain',
	},
});

export const Home = () => {
	return (
		<GuestLayout>
			<HeroSection />
			<Container fluid>
				<Row>
					<Col lg={8}>
						<Card title="Latest updates" sx={styles.card}>
							<Row align="center">
								<Col sm={7}>
									<Flex sx={styles.cardBody}>
										<p {...stylex.props(styles.cardTitle)}>Connecting cards</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
										<Button rightSection={<ArrowRightIcon />} variant="outline">
											Read more
										</Button>
									</Flex>
								</Col>
								<Col sm={5}>
									<img
										src="/img/updates.png"
										alt="images"
										{...stylex.props(styles.cardImg)}
									/>
								</Col>
							</Row>
						</Card>
						<Card title="Connect with our experts" sx={styles.card}>
							<Row align="center">
								<Col sm={7}>
									<Flex sx={styles.cardBody}>
										<p {...stylex.props(styles.cardTitle)}>Connecting cards</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
										<Button rightSection={<ArrowRightIcon />} variant="outline">
											Learn more
										</Button>
									</Flex>
								</Col>
								<Col sm={5}>
									<img
										src="/img/expert.png"
										alt="images"
										{...stylex.props(styles.cardImg)}
									/>
								</Col>
							</Row>
						</Card>
					</Col>
					<Col lg={4}>
						<Collapsible label="Send money" opened={true} sx={styles.card}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</Collapsible>
						<Collapsible label="Receive money" sx={styles.card}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</Collapsible>
						<Collapsible label="Cashback" sx={styles.card}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</Collapsible>
					</Col>
				</Row>
			</Container>
		</GuestLayout>
	);
};
