import { AppLayout } from '../layout';
import { Col, Row } from 'react-grid-system';
import { Button, Card, Flex, IconButton, List, Select } from '../components/ui';
import * as stylex from '@stylexjs/stylex';
import { fontSizes, spacing, tokens } from '../token.stylex.ts';
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
import { useMediaQuery } from 'react-responsive';

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
	title: {
		fontSize: fontSizes.h4,
		textTransform: 'capitalize',
		color: tokens.grayText,
		fontWeight: 500,
		marginBottom: spacing['4'],
	},
	card: {
		marginBottom: spacing['4'],
	},
	subTitle: {},
});

export const Dashboard = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});

	return (
		<AppLayout>
			<Row>
				<Col lg={8}>
					<Flex align="center" justify="between">
						<h3 {...stylex.props(styles.title)}>money insight</h3>
						<Select
							defaultValue="30"
							items={[30, 60, 90, 150].map((_) => ({
								label: `${_} days`,
								value: _.toString(),
							}))}
						/>
					</Flex>
					<Card title="Total earnings" sx={styles.card}>
						<h1>$ 26,800.00</h1>
						<p>
							Your finances are stable and well-managed. Your income covers
							regular expenses and savings, and you have an emergency fund in
							place.
						</p>
					</Card>
					<Row style={{ marginBottom: isDesktopOrLaptop ? spacing['4'] : 0 }}>
						{STATS.map((stat) => (
							<Col
								key={`${stat.title}-${stat.diff}`}
								lg={4}
								style={{ marginBottom: isDesktopOrLaptop ? 0 : spacing['4'] }}
							>
								<StatsCard
									title={stat.title}
									diff={stat.diff}
									amount={stat.amount}
								/>
							</Col>
						))}
					</Row>
					<Card title="Insights" sx={styles.card}>
						<InsightsChart />
					</Card>
					<Card title="Transactions" sx={styles.card}>
						<TransactionsTable />
					</Card>
				</Col>
				<Col lg={4}>
					<Flex align="center" justify="between">
						<h3 {...stylex.props(styles.title)}>my card</h3>
						<Button leftSection={<PlusIcon size={18} />} variant="filled">
							Add Card
						</Button>
					</Flex>
					<Card title="Top summary" extra={<CoinsIcon />} sx={styles.card}>
						<SummaryChart />
					</Card>
					<Card title="Balance" extra={<Wallet2 />} sx={styles.card}>
						<h2>$2,690.00</h2>
						<List
							items={CARDS.map((card) => (
								<Flex align="center" justify="between">
									<Flex direction="column">
										<strong>Card number</strong>
										<span>{card.number}</span>
									</Flex>
									<Flex direction="column">
										<strong>CVV</strong>
										<span>{card.cvv}</span>
									</Flex>
									<Flex direction="column">
										<strong>Expires</strong>
										<span>{card.exp}</span>
									</Flex>
								</Flex>
							))}
							direction="column"
						/>
						<br />
						<Flex align="center" justify="between">
							<Flex>
								<Button
									leftSection={<ArrowDownCircle size={18} />}
									variant="outline"
								>
									Withdraw
								</Button>
								<Button
									leftSection={<ArrowUpCircleIcon size={18} />}
									variant="outline"
								>
									Transfer
								</Button>
							</Flex>
							<IconButton variant="outline">
								<MoreVerticalIcon size={18} />
							</IconButton>
						</Flex>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	);
};
