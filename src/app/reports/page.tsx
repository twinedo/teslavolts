'use client';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar';
import ToolbarSA from '@/components/toolbar-sa';
import React, { useState } from 'react';

const Reports = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sidebar>
			<div>Reports</div>
		</Sidebar>
	);
};

export default Reports;
