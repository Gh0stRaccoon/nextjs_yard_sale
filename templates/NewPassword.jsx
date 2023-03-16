import React from 'react';
import styles from '@styles/NewPassword.module.scss';
import YardSaleLogo from '@logos/logo_yard_sale.svg';

export function NewPassword() {
	return (
		<div className={styles["NewPassword"]}>
			<div className={styles["NewPassword-container"]}>
				<img src={YardSaleLogo} alt="logo" className={styles["logo"]} />
				<h1 className={styles["title"]}>Create a new password</h1>
				<p className={styles["subtitle"]}>Enter a new passwrd for yue account</p>
				<form action="/" className={styles["form"]}>
					<label for="password" className={styles["label"]}>
						Password
					</label>
					<input
						type="password"
						id="password"
						placeholder="*********"
						className="input input-password"
					/>
					<label for="new-password" className={styles["label"]}>
						Password
					</label>
					<input
						type="password"
						id="new-password"
						placeholder="*********"
						className="input input-password"
					/>
					<input
						type="submit"
						value="Confirm"
						className="primary-button login-button"
					/>
				</form>
			</div>
		</div>
	);
}
