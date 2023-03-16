import React, { useRef } from 'react';
import styles from '@styles/Login.module.scss';
import YardSaleLogo from '@logos/logo_yard_sale.svg';

export function Login() {
	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	return (
		<div className={styles["Login"]}>
			<div className={styles["Login-container"]}>
				<img src={YardSaleLogo} alt="logo" className={styles["logo"]} />
				<form action="/" className={styles["form"]} ref={form} onSubmit={handleSubmit}>
					<label htmlFor="email" className={styles["label"]}>
						Email address
					</label>
					<input
						type="text"
						name="email"
						placeholder="platzi@example.cm"
						className="input input-email"
					/>
					<label htmlFor="password" className={styles["label"]}>
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="*********"
						className="input input-password"
					/>
					<button className="primary-button login-button">Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}
