'use client';
import styles from './Header.module.css';
import {useContext} from 'react';
import LogoCompanyImage from '@/public/LogoCompany.svg';
import Link from 'next/link';
import cn from 'classnames';
import {GitLogoContext} from '@/context/GitLogo.context';
import Image from 'next/image';

interface HeaderProps {
	className?: string;
}

export default function Header({className}: HeaderProps) {

	const GitLogoData = useContext(GitLogoContext);

	return (
		<header className={cn(className, styles.headerContainer)}>
			<Link href='/'>
				<LogoCompanyImage className={styles.logo}/>
			</Link>
			<Link href={GitLogoData.link} target='_blank'>
				<Image src={GitLogoData.img} alt={GitLogoData.alt} width={100} height={25} className={styles.logo}/>
			</Link>
		</header>
	);
}