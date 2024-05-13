import styles from './Footer.module.css';
import {HTMLAttributes} from 'react';
import cn from 'classnames';

interface FooterProps extends HTMLAttributes<HTMLElement> {
}

export default function Footer({className}: FooterProps) {
	return (
		<footer className={cn(className)}>
			<div className={cn(styles.footer)}>
				<div>Ⓒ ООО «Мандарины и апельсины» {new Date().getFullYear()}</div>
				<div>Design by Я🏆</div>
			</div>
		</footer>
	);
}