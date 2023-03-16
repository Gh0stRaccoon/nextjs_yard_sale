import axios from 'axios';
import { useEffect, useState } from 'react';

export function useProducts({ API }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await axios(API);
			setProducts(response.data);
		};

		getProducts();
	}, []);

	return { products };
}
