import { AppLayout } from '../layout';
import { Col, Row } from 'react-grid-system';
import { Card, Flex } from '../components/ui';
import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../token.stylex.ts';
import { StatsCard } from '../components/StatsCard';
import { InsightsChart } from '../components/InsightsChart';
import { TransactionsTable } from '../components/TransactionsTable';

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
	card: { marginBottom: spacing['4'] },
	subTitle: {},
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
					<Card title="Total earnings" sx={styles.card}>
						<h1>$ 26,800.00</h1>
						<p>
							Your finances are stable and well-managed. Your income covers
							regular expenses and savings, and you have an emergency fund in
							place.
						</p>
					</Card>
					<Row style={{ marginBottom: spacing['4'] }}>
						{STATS.map((stat) => (
							<Col key={`${stat.title}-${stat.diff}`} lg={4}>
								<StatsCard
									title={stat.title}
									diff={stat.diff}
									amount={stat.amount}
								/>
							</Col>
						))}
					</Row>
					<InsightsChart sx={styles.card} />
					<Card title="Transactions" sx={styles.card}>
						<TransactionsTable />
					</Card>
				</Col>
				<Col lg={4}></Col>
			</Row>
		</AppLayout>
	);
};
