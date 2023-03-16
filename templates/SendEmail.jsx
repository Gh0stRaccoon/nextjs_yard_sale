import React from 'react';
import styles from '@styles/SendEmail.module.scss';
import YardSaleLogo from '@logos/logo_yard_sale.svg';
import EmailIcon from '@icons/email.svg';

export function SendEmail() {
	return (
		<div className={styles["SendEmail"]}>
			<div className={styles["form-container"]}>
				<img src={YardSaleLogo} alt="logo" className={styles["logo"]} />
				<h1 className={styles["title"]}>Email has been sent!</h1>
				<p className={styles["subtitle"]}>
					Please check your inbox for instructions on how to reset the password
				</p>
				<div className={styles["email-image"]}>
					<img src={EmailIcon} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className={styles["resend"]}>
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}
