import { ColumnDef } from '@tanstack/react-table';
import { Flex, Table } from '../ui';
import { useFetchData } from '../../hooks';
import * as stylex from '@stylexjs/stylex';
import { styles } from './TransactionsTable.styles.ts';

export type Transaction = {
	id: string;
	icon: string;
	name: string;
	category: string;
	amount: number;
	date: string;
	color: string;
};

export const columns: ColumnDef<Transaction>[] = [
	{
		header: 'Transactions',
		cell: ({ row }) => {
			const name = row.original.name,
				icon = row.original.icon;

			return (
				<Flex sx={styles.name}>
					<img src={icon} alt={name} {...stylex.props(styles.img)} />
					<p>{name}</p>
				</Flex>
			);
		},
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
	},
];

export const TransactionsTable = () => {
	const { data } = useFetchData('/mocks/transactions.json');

	return <Table data={data} columns={columns} />;
};
