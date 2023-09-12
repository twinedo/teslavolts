import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

export type DataItem = {
	id?: number;
	sessionName: string;
	sessionDuration: string;
	energy: string;
	connectors: string;
	status: boolean;
	actions: any;
};

type TableProps = {
	data: DataItem[];
};

const TableChargingManagement: React.FC<TableProps> = ({ data }) => {
	const [sortBy, setSortBy] = useState<{
		column: keyof DataItem | null;
		direction: 'asc' | 'desc';
	}>({
		column: null,
		direction: 'asc',
	});
	const [newData, setNewData] = useState(data);

	const handleSort = (column: keyof DataItem) => {
		if (column === 'actions') {
			return; // Ignore sorting for the "Actions" column
		}

		setSortBy((prev) => ({
			column,
			direction:
				prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
		}));
		const sortedData = [...data].sort((a, b) => {
			if (sortBy.direction === 'asc') {
				return a[sortBy.column!] > b[sortBy.column!] ? 1 : -1;
			} else {
				return a[sortBy.column!] < b[sortBy.column!] ? 1 : -1;
			}
		});
		setNewData(sortedData);
	};

	const handleOptionClick = (item: DataItem) => {
		// Handle the option click for the given item
		console.log(`Option clicked for item with ID#${item.id}`);
	};

	const handleStatusClick = (item: DataItem) => {
		const dat = [...data];
		const findIdx = dat.findIndex((o) => o.id === item.id);
		dat[findIdx].status = !item.status;

		setNewData(dat);
	};

	return (
		<table className='table-fixed w-full '>
			<thead className='bg-neutral-50 rounded-lg'>
				<tr>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('sessionName')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Session Name
							</div>
							{sortBy.column === 'sessionName' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('sessionDuration')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Session Duration
							</div>
							{sortBy.column === 'sessionDuration' &&
							sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('energy')}>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Energy Consumed
							</div>
							{sortBy.column === 'energy' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('connectors')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Connectors
							</div>
							{sortBy.column === 'connectors' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('status')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Status
							</div>
							{sortBy.column === 'status' && sortBy.direction === 'asc' ? (
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
				{newData.map((row, i) => (
					<tr key={i}>
						<td className='px-4 py-2 text-center'>{row.sessionName}</td>
						<td className='px-4 py-2 text-center'>{row.sessionDuration}</td>
						<td className='px-4 py-2 text-center'>{row.energy}</td>
						<td className='px-4 py-2 text-center'>{row.connectors}</td>
						<td className='px-4 py-2 text-center'>
							<button onClick={() => handleStatusClick(row)}>
								{row.status ? (
									<BsToggleOn color='#4185C6' size={30} />
								) : (
									<BsToggleOff color='grey' size={30} />
								)}
							</button>
						</td>
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
export default TableChargingManagement;
