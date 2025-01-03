import React from "react";
import styles from './SelectMultiplierButton.module.scss';

export default function SelectMultiplierButton({ multiplier }) {
	return (
		<div className={styles.multiplier}>
			x {multiplier}
		</div>
	)
}