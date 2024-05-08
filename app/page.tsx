import styles from './page.module.css';
import Logo from './logo.svg';

export default function Home() {
	return (
		<main className={styles.main}>
			<Logo />
		</main>
	);
}