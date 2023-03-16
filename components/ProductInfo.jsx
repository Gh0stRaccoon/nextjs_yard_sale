import React from 'react';
import styles from '@styles/ProductInfo.module.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';

export function ProductInfo({ product }) {
	return (
		<>
			<Image src={product.images[0]} alt={product.title} />
			<div className={styles['ProductInfo']}>
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button">
					<Image src={addToCartIcon} alt="add to cart" />
					Add to carte
				</button>
			</div>
		</>
	);
}
