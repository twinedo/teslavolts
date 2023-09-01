'use client';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar';
import ToolbarSA from '@/components/toolbar-sa';
import React, { useState } from 'react';

const MyWallet = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sidebar>
			<div>MyWallet</div>
		</Sidebar>
	);
};

export default MyWallet;
