import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import Head from 'next/head';
import { AppContext } from '@context/AppContext';
import Link from 'next/link';

export default function Checkout() {
	const {
		state: { cart },
		cartLength,
		totalCart,
	} = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Checkout - React Shop</title>
			</Head>
			<div className={styles['Checkout']}>
				<div className={styles['Checkout-container']}>
					{!!cartLength && (
						<>
							<h1 className={styles['title']}>My order</h1>
							<div className={styles['Checkout-content']}>
								<div className={styles['order']}>
									<p>
										<span>03.25.21</span>
										<span>{cartLength} articles</span>
									</p>
									<p>${totalCart}</p>
								</div>
							</div>
							{cart.map((product) => (
								<OrderItem key={`checkout-${product.id}`} product={product} />
							))}
						</>
					)}
					{!cartLength && (
						<div className={styles['Checkout-empty']}>
							<div>
								<span>You haven&apos;t put anything</span>
								<span>in your shopping cart yet</span>
							</div>
							<Link href="/" className={styles['primary-button']}>
								Go Shopping
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
