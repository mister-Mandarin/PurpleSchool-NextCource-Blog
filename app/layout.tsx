import type { Metadata } from 'next';
import {Open_Sans} from 'next/font/google';
import './globals.css';
import {ReactNode} from 'react';
import Header from '@/layout/Header/Header';
import cn from 'classnames';
import styles from './layout.module.css';
import Footer from '@/layout/Footer/Footer';
import GitLogoProvider from '@/context/GitLogo.context';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Новостной портал',
	description: 'Оранжевые новости здесь и сейчас. Специально для вас!'
};
 
export default function RootLayout({
	children
}: Readonly<{
  children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={cn(inter.className, styles.container)}>
				<GitLogoProvider>
					<Header className={styles.header}/>
				</GitLogoProvider>
				<main className={styles.main}>
					{children}
				</main>
				<Footer className={styles.footer}/>
			</body>
		</html>
	);
}
