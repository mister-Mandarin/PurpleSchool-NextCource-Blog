import styles from './Header.module.css';
import {HTMLAttributes} from 'react';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
}

export default function Header({className}: HeaderProps) {
	return (
		<header className={className}>
            тут шапка
		</header>
	);
}