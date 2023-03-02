/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer 
         className={styles.left}>
        <p className='text-sm text-slate-500'>&copy; 2023 Donuts Protocol. All rights reserved.</p>
        </footer>
	);
}

export default Footer;