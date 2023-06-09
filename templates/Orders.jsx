import React from 'react';
import { OrderItem } from '@components/OrderItem';
import styles from '@styles/Orders.module.scss';

export function Orders() {
	return (
		<div className={styles["Orders"]}>
			<div className={styles["Orders-container"]}>
				<h1 className={styles["title"]}>My orders</h1>
				<div className={styles["Orders-content"]}>
					<OrderItem />
				</div>
			</div>
		</div>
	);
}
