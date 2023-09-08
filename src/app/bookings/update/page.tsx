'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BsArrowLeft, BsCalendarPlus, BsClock } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Modal from '@/components/modal';
import Image from 'next/image';

const BookingsUpdate = () => {
	const breadcrumbItems = [
		{ text: 'Bookings', link: '/bookings' },
		{ text: 'Update Booking', link: '/bookings/update' },
	];

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<Sidebar>
			<div className='w-full'>
				<div className='flex flex-row items-center'>
					<div className='w-12 h-12 px-[13.71px] pt-[13.29px] pb-[14.14px] bg-white rounded-2xl border border-zinc-100 justify-center items-center inline-flex'>
						<BsArrowLeft />
					</div>
					<div className='w-4' />
					<div className='flex flex-col'>
						<div className=''>
							<Breadcrumb items={breadcrumbItems} />
						</div>
						<div className='text-black text-2xl font-medium leading-[30px]'>
							Update Booking
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full h-[352px] pl-8 pr-[31px] py-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					<div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'>
						<div className='justify-start items-start gap-6 inline-flex'>
							<div className='w-[345px] flex-col justify-start items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Station Name
									</div>
								</div>
								<div className='self-stretch h-14 pl-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='0001'
										value='0001'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>
								</div>
							</div>
							<div className='w-[345px] flex-col justify-start items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Date
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='16/07/2023'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>

									<div className='w-6 h-6 justify-center items-center flex'>
										<div className='w-6 h-6 relative'>
											<BsCalendarPlus size={24} />
										</div>
									</div>
								</div>
							</div>
							<div className='w-[345px] flex-col justify-start items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Timings
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='10:30 AM - 11:30 AM'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>

									<div className='w-6 h-6 justify-center items-center flex'>
										<div className='w-6 h-6 relative'>
											<BsClock size={24} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='justify-start items-start gap-6 inline-flex'>
							<div className='w-[345px] flex-col justify-start items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Address
									</div>
								</div>
								<div className='self-stretch h-14 pl-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='Begumpet, Hyderabad'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>
								</div>
							</div>
							<div className='w-[345px] flex-col justify-start items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Booking Status
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<div className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight'>
										Confirmed
									</div>
									<div className='w-6 h-6 justify-center items-center flex'>
										<div className='w-6 h-6 relative'>
											<BiChevronDown size={24} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>
						<div
							className='h-14 justify-start items-start flex cursor-pointer'
							onClick={openModal}>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-rose-500 justify-center items-center gap-2 flex'>
								<div className='text-center text-rose-500 text-base font-medium leading-3'>
									Delete
								</div>
							</div>
						</div>
						<div className='h-14 justify-start items-start flex cursor-pointer'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Save Booking
								</div>
							</div>
						</div>
					</div>
					<Modal isOpen={isModalOpen} onClose={closeModal}>
						<div className='w-[400px] flex flex-col justify-center items-center'>
							<Image
								src='/assets/ic_trash_red.svg'
								alt='trash'
								width={80}
								height={80}
							/>
							<div className='h-5 text-center text-stone-950 text-2xl font-semibold leading-loose'>
								Delete Booking
							</div>
							<div className='h-6' />
							<div className='text-center text-neutral-500 text-base font-medium leading-tight'>
								Are you sure that you want to delete “Wallbox DC Charger”
							</div>
							<div className='h-6' />
							<div className='w-full flex flex-row justify-evenly items-center'>
								<button className=' h-14 px-8 py-[26px] bg-rose-500 rounded-lg justify-center items-center gap-2 inline-flex'>
									<div className='text-center text-white text-base font-medium leading-3'>
										Yes, Delete
									</div>
								</button>
								<button
									onClick={closeModal}
									className=' h-14 px-8 py-[26px] bg-zinc-100 rounded-lg justify-center items-center gap-2 inline-flex'>
									<div className='text-center text-stone-950 text-base font-medium leading-3'>
										No, Thanks
									</div>
								</button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</Sidebar>
	);
};

export default BookingsUpdate;
