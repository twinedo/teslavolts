import Sidebar from '../sidebar';

const Layout = ({ collapsed, children }) => {
	return (
		<div
			className={`w-full h-[88px] px-8 py-4 bg-white justify-center items-start gap-[559px] ${
				collapsed ? 'flex' : 'inline-flex'
			}`}>
			<div
				className={`w-full self-stretch ${
					collapsed ? 'pl-4 pr-[296px]' : 'pl-4 pr-[296px]'
				} py-4 bg-white rounded-2xl border border-zinc-100 justify-start items-center inline-flex`}>
				{/* Content of your child component */}
			</div>
			{children}
			{/* Rest of your child component */}
		</div>
	);
};

export default Layout;
