'use client';
import Layout from '@/components/layout';
import Sidebar from '@/components/sidebar';
import ToolbarSA from '@/components/toolbar-sa';
import React, { useState } from 'react';

const UserManagement = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sidebar>
			<div>UserManagement</div>
		</Sidebar>
	);
};

export default UserManagement;
