import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

export type DataItem = {
	id?: number;
	host: string;
	chargingLoc: string;
	timings: string;
	maxPower: string;
	price: string;
	availabilty: boolean;
	status: string;
	actions: any;
};

type TableProps = {
	data: DataItem[];
};

const TableCommunity: React.FC<TableProps> = ({ data }) => {
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

	const handleAvailabilityClick = (item: DataItem) => {
		const dat = [...data];
		const findIdx = dat.findIndex((o) => o.id === item.id);
		dat[findIdx].availabilty = !item.availabilty;

		setNewData(dat);
	};

	return (
		<table className='table-fixed w-full '>
			<thead className='bg-neutral-50 rounded-lg'>
				<tr>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('host')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Host Name
							</div>
							{sortBy.column === 'host' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('chargingLoc')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Charging Location
							</div>
							{sortBy.column === 'chargingLoc' && sortBy.direction === 'asc' ? (
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
						onClick={() => handleSort('maxPower')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Max Power Supply
							</div>
							{sortBy.column === 'maxPower' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('price')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Charging Price
							</div>
							{sortBy.column === 'price' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('availabilty')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Availabilty
							</div>
							{sortBy.column === 'availabilty' && sortBy.direction === 'asc' ? (
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
						<td className='px-4 py-2 text-center'>{row.host}</td>
						<td className='px-4 py-2 text-center'>{row.chargingLoc}</td>
						<td className='px-4 py-2 text-center'>{row.timings}</td>
						<td className='px-4 py-2 text-center'>{row.maxPower}</td>
						<td className='px-4 py-2 text-center'>{row.price}</td>
						<td className='px-4 py-2 text-center'>
							<button onClick={() => handleAvailabilityClick(row)}>
								{row.availabilty ? (
									<BsToggleOn color='#4185C6' size={30} />
								) : (
									<BsToggleOff color='grey' size={30} />
								)}
							</button>
						</td>
						<td className='px-4 py-2 text-center'>
							<div className='w-[73px] h-[29px] px-2 py-1.5 bg-emerald-500 bg-opacity-10 rounded-[100px] justify-center items-center gap-2.5 inline-flex'>
								<div className='justify-center items-center gap-0.5 flex'>
									<div className='text-emerald-500 text-sm font-normal leading-[17px]'>
										{row.status}
									</div>
								</div>
							</div>
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
export default TableCommunity;
