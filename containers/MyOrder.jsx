import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import ArrowIcon from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function MyOrder({ handleToggle, myOrderRef }) {
	const {
		state: { cart },
		cartLength,
		totalCart,
	} = useContext(AppContext);

	return (
		<aside
			className={`${styles.MyOrder} ${styles.inTransition}`}
			ref={myOrderRef}
		>
			<div
				className={styles['title-container']}
				role="button"
				tabIndex={0}
				onClick={handleToggle}
			>
				<Image src={ArrowIcon} alt="arrow" />
				<p className={styles['title']}>My order</p>
			</div>
			{cartLength ? (
				<div className={styles['my-order-items']}>
					{cart.map((product) => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
			) : (
				''
			)}
			<div className={styles['my-order-content']}>
				{cartLength ? (
					<>
						<div className={styles['order']}>
							<p>
								<span>Total</span>
							</p>
							<p>${totalCart}</p>
						</div>
						<Link href={'/checkout'} className={styles['primary-button']}>
							Checkout
						</Link>{' '}
					</>
				) : (
					<>
						<div className={styles['my-order-empty']}>
							<p>¡UPS!</p>
							<span>There&apos;s nothing to see</span>
						</div>
					</>
				)}
			</div>
		</aside>
	);
}
