import { Card, CardProps, Flex } from '../ui';
import * as stylex from '@stylexjs/stylex';
import { styles } from './StatsCard.styles.ts';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

export type StatsCardProps = {
	title: string;
	diff: number;
	amount: string;
} & Omit<CardProps, 'children'>;

export const StatsCard = ({ title, amount, diff }: StatsCardProps) => {
	return (
		<Card
			// @ts-ignore
			title={
				<Flex sx={styles.title}>
					<p>{title}</p>
				</Flex>
			}
			extra={
				<div
					{...stylex.props(
						styles.extra,
						diff > 0 ? styles.plusDiff : styles.minusDiff
					)}
				>
					{diff > 0 && '+'}
					{diff}
					{diff > 0 ? (
						<TrendingUpIcon size={14} />
					) : (
						<TrendingDownIcon size={14} />
					)}
				</div>
			}
		>
			<p {...stylex.props(styles.amount)}>{amount}</p>
		</Card>
	);
};
