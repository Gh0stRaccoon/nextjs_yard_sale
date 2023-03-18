import React, { useContext, useEffect, useRef, useState } from 'react';
import ShoppingCartIcon from '@icons/icon_shopping_cart.svg';
import YardSaleLogo from '@logos/logo_yard_sale.svg';
import MenuIcon from '@icons/icon_menu.svg';
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import { AppContext } from '@context/AppContext';
import styles from '@styles/Header.module.scss';
import myOrderStyles from '@styles/MyOrder.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
	const { cartLength } = useContext(AppContext);
	const [toggle, setToggle] = useState(false);
	const [toggleCart, setToggleCart] = useState(false);

	const cartAside = useRef();

	const handleToggle = () => {
		setToggle(!toggle);
	};
	const handleToggleCart = () => {
		const cartRef = cartAside.current;

		if (cartRef) {
			cartRef.classList.add(myOrderStyles['outTransition']);
			setTimeout(() => {
				setToggleCart(!toggleCart);
			}, 500);
		} else {
			setToggleCart(!toggleCart);
		}
	};

	return (
		<nav className={styles.Nav}>
			<Image src={MenuIcon} alt="menu" className={styles['menu']} />
			<div className={styles['navbar-left']}>
				<Link href={'/'}>
					<Image src={YardSaleLogo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-email']}>
						<span role="button" tabIndex={0} onClick={handleToggle}>
							platzi@example.com
						</span>
					</li>
					<li className={styles['navbar-shopping-cart']}>
						<Image
							src={ShoppingCartIcon}
							alt="shopping cart"
							onClick={handleToggleCart}
						/>
						{cartLength ? <div>{cartLength}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleCart && (
				<MyOrder handleToggle={handleToggleCart} myOrderRef={cartAside} />
			)}
		</nav>
	);
}
