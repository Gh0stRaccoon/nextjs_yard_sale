import React from 'react';
import { ProductInfo } from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';
import CloseIcon from '@icons/icon_close.png';

export function ProductDetail() {
	return (
		<aside className={styles["ProductDetail"]}>
			<div className={styles["ProductDetail-close"]}>
				<img src={CloseIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}
