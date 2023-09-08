import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

export type DataItem = {
	id?: number;
	stationName: string;
	date: string;
	timings: string;
	address: string;
	actions: any;
};

type TableProps = {
	data: DataItem[];
};

type SortByProps = {
	column: string;
	direction: 'asc' | 'desc';
};

const TableBookings: React.FC<TableProps> = ({ data }) => {
	const [sortBy, setSortBy] = useState<{
		column: keyof DataItem | null;
		direction: 'asc' | 'desc';
	}>({
		column: null,
		direction: 'asc',
	});

	const handleSort = (column: keyof DataItem) => {
		if (column === 'actions') {
			return; // Ignore sorting for the "Actions" column
		}

		setSortBy((prev) => ({
			column,
			direction:
				prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
		}));
	};

	const sortedData = [...data].sort((a, b) => {
		if (sortBy.direction === 'asc') {
			return a[sortBy.column!] > b[sortBy.column!] ? 1 : -1;
		} else {
			return a[sortBy.column!] < b[sortBy.column!] ? 1 : -1;
		}
	});

	const handleOptionClick = (item: DataItem) => {
		// Handle the option click for the given item
		console.log(`Option clicked for item with ID#${item.stationName}`);
	};

	return (
		<table className='table-fixed w-full '>
			<thead className='bg-neutral-50'>
				<tr>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('stationName')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Station Name
							</div>
							{sortBy.column === 'stationName' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('date')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Date
							</div>
							{sortBy.column === 'date' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('timings')}>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Timings
							</div>
							{sortBy.column === 'timings' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('address')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Address
							</div>
							{sortBy.column === 'address' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th className='px-4 py-2 cursor-pointer'>Actions </th>
				</tr>
			</thead>
			<div className='h-6' />
			<tbody>
				{sortedData.map((row, i) => (
					<tr key={i}>
						<td className='px-4 py-2 text-center'>{row.stationName}</td>
						<td className='px-4 py-2 text-center'>{row.date}</td>
						<td className='px-4 py-2 text-center'>{row.timings}</td>
						<td className='px-4 py-2 text-center'>{row.address}</td>
						<td className='px-4 py-2 text-center'>
							<button
								className='rounded-full p-2 border'
								onClick={() => handleOptionClick(row)}>
								<PiDotsThreeOutlineVerticalFill color='black' size={30} />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default TableBookings;
