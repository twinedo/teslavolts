'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React from 'react';
import { BsArrowLeft, BsCalendarPlus, BsClock, BsSearch } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt } from 'react-icons/bi';

const PaymentMethodCreate = () => {
	const breadcrumbItems = [
		{ text: 'Billings Details', link: '/billings-details/payment-method' },
		{
			text: 'Add Payment Method',
			link: '/billings-details/payment-method/create',
		},
	];

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
							Add Payment Method
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center items-end gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-2 gap-6 justify-center items-center w-full'>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Card Holder Name
								</div>
							</div>
							<div className='self-stretch h-14 pl-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='ambani.eth'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
								Credit/Debit Card Number
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='6464654654646846'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Expiry Date
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='08/2025'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>

							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									CVC
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='1234'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Account Details
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Approved'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>

								<div className='w-6 h-6 justify-center items-center flex'>
									<div className='w-6 h-6 relative'>
										<BiChevronDown size={24} />
									</div>
								</div>
							</div>
						</div>

					</div>
					{/* </div> */}
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>

						<div className='h-14 justify-start items-start flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Save Card
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default PaymentMethodCreate;
