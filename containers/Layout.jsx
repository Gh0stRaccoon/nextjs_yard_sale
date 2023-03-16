import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';

export function Layout() {
	return (
		<div className={styles["Layout"]}>
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;
