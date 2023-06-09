import React, { useContext } from 'react';
import Image from 'next/image';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCartIcon from '@icons/bt_added_to_cart.svg';
import { AppContext } from '@context/AppContext';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import styles from '@styles/ProductItem.module.scss';

export function ProductItem({ product }) {
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const isInCart = state.cart.some((el) => el.id === product.id);

	const handleClick = (item) => {
		if (isInCart) {
			removeFromCart(item);
		} else {
			addToCart(item);
		}
	};

	return (
		<div className={styles['ProductItem']}>
			<Image
				src={product.images[0]}
				width={250}
				height={250}
				alt={product.title}
				onError={logo_yard_sale}
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<Image
						src={isInCart ? addedToCartIcon : addToCartIcon}
						alt=""
						onClick={() => handleClick(product)}
					/>
				</figure>
			</div>
		</div>
	);
}
