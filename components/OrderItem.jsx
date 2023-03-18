import React, { useContext } from 'react';
import CloseIcon from '@icons/icon_close.png';
import { AppContext } from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

export function OrderItem({ product }) {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (payload) => {
		removeFromCart(payload);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image
					src={product?.images[0]}
					width={50}
					height={50}
					alt={product?.title}
				/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image
				src={CloseIcon}
				alt="close"
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}
