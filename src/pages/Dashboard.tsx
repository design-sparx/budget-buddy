import { AppLayout } from '../layout';
import { Col, Row } from 'react-grid-system';
import { Button, Card, Flex, IconButton, List } from '../components/ui';
import * as stylex from '@stylexjs/stylex';
import { spacing, tokens } from '../token.stylex.ts';
import { StatsCard } from '../components/StatsCard';
import { InsightsChart, SummaryChart } from '../components/Charts';
import { TransactionsTable } from '../components/TransactionsTable';
import {
	ArrowDownCircle,
	ArrowUpCircleIcon,
	CoinsIcon,
	MoreVerticalIcon,
	PlusIcon,
	Wallet2,
} from 'lucide-react';

const STATS = [
	{ title: 'total income', amount: '$16,080.00', diff: 23 },
	{ title: 'total expenses', amount: '$8,040.00', diff: 17 },
	{ title: 'total save', amount: '$2,680.00', diff: -12 },
];

const CARDS = [
	{ number: '1109 8976 3521 9981', cvv: 123, exp: '11/24' },
	{ number: '1109 8976 3521 9981', cvv: 123, exp: '11/24' },
	{ number: '1109 8976 3521 9981', cvv: 123, exp: '11/24' },
	{ number: '1109 8976 3521 9981', cvv: 123, exp: '11/24' },
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
					<Card header={<h5>Insights</h5>} sx={styles.card}>
						<InsightsChart />
					</Card>
					<Card header={<h5>Transactions</h5>} sx={styles.card}>
						<TransactionsTable />
					</Card>
				</Col>
				<Col lg={4}>
					<Flex align="center">
						<h4>my card</h4>
						<Button leftSection={<PlusIcon size={18} />}>Add Card</Button>
					</Flex>
					<Card
						header={
							<Flex>
								<CoinsIcon />
								<h5>Top summary</h5>
							</Flex>
						}
						sx={styles.card}
					>
						<SummaryChart />
					</Card>
					<Card
						header={
							<Flex>
								<Wallet2 />
								<h5>Balance</h5>
							</Flex>
						}
						sx={styles.card}
					>
						<h3>$2,690.00</h3>
						<List
							items={CARDS.map((card) => (
								<Flex align="center" justify="between">
									<Flex direction="column">
										<span>card number</span>
										<span>{card.number}</span>
									</Flex>
									<Flex direction="column">
										<span>cvv</span>
										<span>{card.cvv}</span>
									</Flex>
									<Flex direction="column">
										<span>expires</span>
										<span>{card.exp}</span>
									</Flex>
								</Flex>
							))}
							direction="column"
						/>
						<Flex>
							<Button leftSection={<ArrowDownCircle />}>Withdraw</Button>
							<Button leftSection={<ArrowUpCircleIcon />}>Transfer</Button>
							<IconButton>
								<MoreVerticalIcon />
							</IconButton>
						</Flex>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	);
};
