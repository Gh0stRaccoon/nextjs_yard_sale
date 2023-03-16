import React from 'react';
import { ProductItem } from '@components/ProductItem';
import { useProducts } from '@hooks/useProducts';
import styles from '@styles/ProductList.module.scss';

export function ProductList() {
	const API = 'https://api.escuelajs.co/api/v1/products?limit=100&offset=0';
	const { products } = useProducts({ API });

	return (
		<section className={styles['main-container']}>
			<div className={styles['ProductList']}>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
