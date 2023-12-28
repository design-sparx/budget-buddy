import { AppLayout } from '../layout';
import { Col, Row } from 'react-grid-system';
import { Card, Flex } from '../components/ui';
import * as stylex from '@stylexjs/stylex';
import { tokens } from '../token.stylex.ts';
import { StatsCard } from '../components/StatsCard';
import { InsightsChart } from '../components/InsightsChart';

const STATS = [
	{ title: 'total income', amount: '$16,080.00', diff: 23 },
	{ title: 'total expenses', amount: '$8,040.00', diff: 17 },
	{ title: 'total save', amount: '$2,680.00', diff: -12 },
];

export const styles = stylex.create({
	base: {},
	text: {
		color: tokens.grayText,
	},
	title: {},
	subTitle: {},
	statsCard: {
		height: '100%',
	},
});

export const Dashboard = () => {
	return (
		<AppLayout>
			<Row>
				<Col lg={8}>
					<Flex>
						<h3 {...stylex.props(styles.text)}>money insight</h3>
						<p> last 30 days</p>
					</Flex>
					<Card title="Total earnings">
						<h1>$ 26,800.00</h1>
						<p>
							Your finances are stable and well-managed. Your income covers
							regular expenses and savings, and you have an emergency fund in
							place.
						</p>
					</Card>
					<Row>
						{STATS.map((stat) => (
							<Col key={`${stat.title}-${stat.diff}`} lg={4}>
								<StatsCard
									title={stat.title}
									diff={stat.diff}
									amount={stat.amount}
									sx={styles.statsCard}
								/>
							</Col>
						))}
					</Row>
					<InsightsChart />
				</Col>
				<Col lg={4}></Col>
			</Row>
		</AppLayout>
	);
};
