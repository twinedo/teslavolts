import React from 'react';

function ToolbarSA() {
	return (
		<div>
			<div
				className={`w-full h-[88px] px-8 py-4 bg-white justify-between items-start inline-flex`}>
				<div className='w-[391px] self-stretch pl-4 pr-[296px] py-4 bg-white rounded-2xl border border-zinc-100 justify-start items-center inline-flex'>
					<div className='justify-start items-center gap-2 inline-flex'>
						<div className='w-6 h-6 pl-[2.78px] pr-[2.46px] pt-[2.78px] pb-0.5 justify-center items-center flex'>
							<div className='w-[18.76px] h-[19.22px] relative'>
								<div className='w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border border-slate-900' />
							</div>
						</div>
						<input
							placeholder='Search'
							className='w-[391px] text-center text-neutral-400 text-base font-normal leading-tight'
						/>
					</div>
				</div>
				<div className='self-stretch justify-start items-start gap-3.5 inline-flex'>
					<div className='w-14 h-14 px-4 pt-[15.50px] pb-[16.50px] bg-white rounded-2xl border border-zinc-100 justify-center items-center flex'>
						<div className='w-6 h-6 pl-[3.28px] pr-[2.93px] pt-[2.28px] pb-[2.50px] justify-center items-center inline-flex'>
							<div className='w-[17.79px] h-[19.22px] relative'>
								<div className='w-[5.27px] h-[5.27px] left-[6.26px] top-[6.97px] absolute rounded-full border border-slate-900' />
							</div>
						</div>
					</div>
					<div className='w-14 h-14 relative bg-white rounded-2xl border border-zinc-100'>
						<div className='w-6 h-6 px-[3.50px] py-0.5 left-[16px] top-[15.50px] absolute justify-center items-center inline-flex'>
							<div className='w-[17px] h-5 relative'></div>
						</div>
						<div className='w-3 h-3 left-[29.50px] top-[16.27px] absolute bg-indigo-400 rounded-lg border border-white' />
					</div>
					<img
						className='w-14 h-14 relative rounded-2xl'
						src='https://via.placeholder.com/56x56'
					/>
				</div>
			</div>
		</div>
	);
}

export default ToolbarSA;
