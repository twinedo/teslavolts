'use client';

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';

const UserManagement = () => {
	return (
		<Sidebar>
			<div className='w-full'>
				<div className='text-black text-2xl font-medium leading-[30px]'>
					User Management
				</div>
			</div>
		</Sidebar>
	);
};

export default UserManagement;
