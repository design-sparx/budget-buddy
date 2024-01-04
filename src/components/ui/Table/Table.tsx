import {
	Column,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	PaginationState,
	Table as ReactTable,
	useReactTable,
} from '@tanstack/react-table';
import { styles } from './Table.styles.ts';
import * as stylex from '@stylexjs/stylex';
import { IconButton } from '../IconButton';
import {
	ChevronFirstIcon,
	ChevronLastIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from 'lucide-react';
import { Flex } from '../Flex';
import { TextField } from '../TextField';
import { Select } from '../Select';
import { useMemo, useState } from 'react';

export type TableProps<TData, TValue> = {
	data: TData[];
	columns: ColumnDef<TData, TValue>[];
	filters?: boolean;
};

export function Table<TData, TValue>({
	columns,
	data,
	filters,
}: TableProps<TData, TValue>) {
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	});

	const pagination = useMemo(
		() => ({
			pageIndex,
			pageSize,
		}),
		[pageIndex, pageSize]
	);

	const table = useReactTable({
		data,
		columns,
		state: {
			pagination,
		},
		// Pipeline
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		//
		debugTable: true,
	});

	return (
		<div className="p-2">
			<div className="h-2" />
			<table {...stylex.props(styles.base)}>
				<thead {...stylex.props(styles.header)}>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} {...stylex.props(styles.row)}>
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										colSpan={header.colSpan}
										{...stylex.props(styles.cell)}
									>
										{header.isPlaceholder ? null : (
											<div>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
												{filters &&
													(header.column.getCanFilter() ? (
														<div>
															<TableFilters
																column={header.column}
																table={table}
															/>
														</div>
													) : null)}
											</div>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr key={row.id} {...stylex.props(styles.row)}>
								{row.getVisibleCells().map((cell) => {
									return (
										<td key={cell.id} {...stylex.props(styles.cell)}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="h-2" />
			<Flex align="center" justify="between" sx={styles.footer}>
				<Flex align="center" gap={1}>
					<span>{table.getState().pagination.pageIndex + 1} -</span>
					<span>{table.getPageCount()}</span>
					<span>/{table.getRowModel().rows.length}</span>
				</Flex>
				<TextField
					label="Go to page:"
					type="number"
					defaultValue={table.getState().pagination.pageIndex + 1}
					min={1}
					onChange={(e: any) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						table.setPageIndex(page);
					}}
					w={100}
				/>
				<Select
					defaultValue={table.getState().pagination.pageSize.toString()}
					onChange={(value: any) => {
						table.setPageSize(Number(value));
					}}
					items={[5, 10, 20].map((_) => ({
						label: _.toString(),
						value: _.toString(),
					}))}
				/>
				<Flex align="center">
					<IconButton
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
						variant="outline"
					>
						<ChevronFirstIcon size={16} />
					</IconButton>
					<IconButton
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						variant="outline"
					>
						<ChevronLeftIcon size={16} />
					</IconButton>
					<IconButton
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						variant="outline"
					>
						<ChevronRightIcon size={16} />
					</IconButton>
					<IconButton
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
						variant="outline"
					>
						<ChevronLastIcon size={16} />
					</IconButton>
				</Flex>
			</Flex>
		</div>
	);
}

export type TableFilterProps = {
	column: Column<any, any>;
	table: ReactTable<any>;
};

export const TableFilters = ({ table, column }: TableFilterProps) => {
	const firstValue = table
		.getPreFilteredRowModel()
		.flatRows[0]?.getValue(column.id);

	const columnFilterValue = column.getFilterValue();

	return typeof firstValue === 'number' ? (
		<div className="flex space-x-2">
			<input
				type="number"
				value={(columnFilterValue as [number, number])?.[0] ?? ''}
				onChange={(e) =>
					column.setFilterValue((old: [number, number]) => [
						e.target.value,
						old?.[1],
					])
				}
				placeholder={`Min`}
				className="w-24 border shadow rounded"
			/>
			<input
				type="number"
				value={(columnFilterValue as [number, number])?.[1] ?? ''}
				onChange={(e) =>
					column.setFilterValue((old: [number, number]) => [
						old?.[0],
						e.target.value,
					])
				}
				placeholder={`Max`}
				className="w-24 border shadow rounded"
			/>
		</div>
	) : (
		<input
			type="text"
			value={(columnFilterValue ?? '') as string}
			onChange={(e) => column.setFilterValue(e.target.value)}
			placeholder={`Search...`}
			className="w-36 border shadow rounded"
		/>
	);
};

export default Table;
