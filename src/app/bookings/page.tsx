'use client';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar';
import ToolbarSA from '@/components/toolbar-sa';
import React, { useState } from 'react';

const Bookings = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sidebar>
			<div>Booking</div>
		</Sidebar>
	);
};

export default Bookings;
