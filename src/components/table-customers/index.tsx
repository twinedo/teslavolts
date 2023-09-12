import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

export type DataItem = {
	id?: number;
	fullName: string;
	userID: string;
	email: string;
	contact: string;
	registrationDate: string;
	balance: string;
	status: string;
	actions: any;
};

type TableProps = {
	data: DataItem[];
};

const TableCustomers: React.FC<TableProps> = ({ data }) => {
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

	return (
		<table className='table-fixed w-full '>
			<thead className='bg-neutral-50 rounded-lg'>
				<tr>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('fullName')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Full Name
							</div>
							{sortBy.column === 'fullName' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('userID')}>
						<div className='flex flex-row items-center justify-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								USER ID
							</div>
							{sortBy.column === 'userID' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('email')}>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Email Address
							</div>
							{sortBy.column === 'email' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('contact')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Contact Number
							</div>
							{sortBy.column === 'contact' && sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('registrationDate')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Registration Date
							</div>
							{sortBy.column === 'registrationDate' &&
							sortBy.direction === 'asc' ? (
								<BiSortAlt2 color='black' />
							) : (
								<BiSortAlt2 color='#767676' />
							)}
						</div>
					</th>
					<th
						className='px-4 py-2 cursor-pointer'
						onClick={() => handleSort('balance')}>
						<div className='flex flex-row justify-center items-center '>
							<div className='text-neutral-500 text-base font-normal leading-tight'>
								Balance
							</div>
							{sortBy.column === 'balance' && sortBy.direction === 'asc' ? (
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
						<td className='px-4 py-2 text-center'>{row.fullName}</td>
						<td className='px-4 py-2 text-center'>{row.userID}</td>
						<td className='px-4 py-2 text-center'>{row.email}</td>
						<td className='px-4 py-2 text-center'>{row.contact}</td>
						<td className='px-4 py-2 text-center'>{row.registrationDate}</td>
						<td className='px-4 py-2 text-center'>{row.balance}</td>
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
export default TableCustomers;
