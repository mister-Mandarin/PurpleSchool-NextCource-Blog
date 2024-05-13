import styles from './page.module.css';
import Logo from './logo.svg';
import PostCard from '@/components/PostCard/PostCard';

export default function Home() {
	return (
		<main className={styles.main}>
			<Logo />
			<PostCard />
		</main>
	);
}