'use client';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar';
import ToolbarSA from '@/components/toolbar-sa';
import React, { useState } from 'react';

const TripPlanner = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sidebar>
			<div>TripPlanner</div>
		</Sidebar>
	);
};

export default TripPlanner;
