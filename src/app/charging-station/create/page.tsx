'use client';
import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { BsArrowLeft, BsCalendarPlus, BsClock, BsSearch, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { BiChevronDown, BiChevronUp, BiMapAlt, BiMap } from 'react-icons/bi';
import Image from 'next/image';

const ChargingStationCreate = () => {
	const MapView = '/assets/charging_stat_add.svg';
	const breadcrumbItems = [
		{ text: 'Charging Station', link: '/charging-station' },
		{ text: 'Add Charging Station', link: '/charging-station/create' },
	];

	const [isAdvanced, setIsAdvanced] = useState(false);

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
							Add Charging Station
						</div>
					</div>
				</div>
				<div className='h-6' />
				<div className='w-full p-8 bg-white rounded-2xl border border-zinc-100 flex-col justify-center gap-10 inline-flex'>
					{/* <div className='self-stretch flex-col justify-start items-start gap-6 inline-flex'> */}
					<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Charging Station Name
								</div>
							</div>
							<div className='self-stretch h-14 pl-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Enter session name'
									value='Enter session name'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Address
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Select'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>

								<div className='w-6 h-6 justify-center items-center flex'>
									<div className='w-6 h-6 relative'>
										<BiMapAlt size={24} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									GPS Coordinates
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='enter energy consumed'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
								<div className='w-6 h-6 justify-center items-center flex'>
									<div className='w-6 h-6 relative'>
										<BiMap size={24} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Charging Rates
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='₹11.40'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Connector Types
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Select'
									className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
								/>

								<div className='w-6 h-6 justify-center items-center flex'>
									<div className='w-6 h-6 relative'>
										<BiChevronDown size={24} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex-col justify-center items-start gap-2 inline-flex'>
							<div className='w-[343px] h-5 justify-center items-center inline-flex'>
								<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
									Availability
								</div>
							</div>
							<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
								<input
									placeholder='Taman Rumpun Bahagia 75300 Melaka'
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
					<div className='flex flex-row items-center gap-2'>
						{!isAdvanced ? (
							<BsToggleOff size={32} color="black" onClick={() => setIsAdvanced(!isAdvanced)} />
						) : (
							<BsToggleOn size={32} color="#4185C6" onClick={() => setIsAdvanced(!isAdvanced)} />
						)} 
						
						
						<div className="text-black text-2xl text-left font-medium font-['SF Pro Display'] leading-[30px]">Advanced Settings</div>
					</div>
					
					{isAdvanced ? (
						<div className='grid grid-cols-3 gap-6 justify-center items-center w-full'>
							<div className='flex-col justify-center items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Energy Management
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='Bitfrost Connect'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>
									<div className='w-6 h-6 justify-center items-center flex'>
										<div className='w-6 h-6 relative'>
											<BiChevronDown size={24} />
										</div>
									</div>
								</div>
							</div>
							<div className='flex-col justify-center items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Load Balancing
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='Wallbox DC Charger'
										className='grow shrink basis-0 text-stone-950 text-base font-medium leading-tight outline-none'
									/>
									<div className='w-6 h-6 justify-center items-center flex'>
										<div className='w-6 h-6 relative'>
											<BiChevronDown size={24} />
										</div>
									</div>
								</div>
							</div>
							<div className='flex-col justify-center items-start gap-2 inline-flex'>
								<div className='w-[343px] h-5 justify-center items-center inline-flex'>
									<div className='w-[343px] text-neutral-400 text-base font-medium leading-tight'>
										Station Preference
									</div>
								</div>
								<div className='self-stretch h-14 px-4 bg-white bg-opacity-10 rounded-lg border border-stone-950 justify-start items-center inline-flex'>
									<input
										placeholder='Wallbox DC Charger'
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
					) : null}
					<div>
						<Image width={1280} height={346} src={MapView} alt='viewbooking' />
					</div>
					
					{/* </div> */}
					<div className='self-stretch justify-end items-end gap-4 inline-flex'>
						<div className='h-14 justify-start items-start inline-flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-white rounded-lg border border-blue-500 justify-center items-center gap-2 flex'>
								<div className='text-center text-blue-500 text-base font-medium leading-3'>
									Cancel
								</div>
							</div>
						</div>
						<div className='w-6' />
						<div className='h-14 justify-start items-start flex'>
							<div className='grow shrink basis-0 px-8 py-[26px] bg-gradient-to-br from-blue-500 to-cyan-700 rounded-lg justify-center items-center gap-2 flex'>
								<div className='text-center text-white text-base font-medium leading-3'>
									Add Station
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sidebar>
	);
};

export default ChargingStationCreate;
