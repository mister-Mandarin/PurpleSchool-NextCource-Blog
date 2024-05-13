import styles from './Footer.module.css';
import {HTMLAttributes} from 'react';
import cn from 'classnames';
import Link from 'next/link';

interface FooterProps extends HTMLAttributes<HTMLElement> {
}

export default function Footer({className}: FooterProps) {
	return (
		<footer className={cn(className)}>
			<div className={cn(styles.footer)}>
				<div>&#xa9; ООО «Мандарины и апельсины» {new Date().getFullYear()}</div>
				<div>Designed by Mister&#127818;Mandarin</div>
			</div>
		</footer>
	);
}