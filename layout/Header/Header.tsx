import styles from './Header.module.css';
import {HTMLAttributes} from 'react';
import GithubImage from '@/public/github.svg';
import LogoCompanyImage from '@/public/LogoCompany.svg';
import Link from 'next/link';
import cn from 'classnames';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
}

export default function Header({className}: HeaderProps) {
	return (
		<header className={cn(className, styles.headerContainer)}>
			<Link href='/'>
				<LogoCompanyImage className={styles.logo}/>
			</Link>
			<Link href='https://github.com/mister-Mandarin/PurpleSchool-NextCource-Blog' target='_blank'>
				<GithubImage className={styles.logo}/>
			</Link>
		</header>
	);
}