import styles from './page.module.css';
import Logo from './logo.svg';
import PostCard from '@/components/PostCard/PostCard';
import LikeButton from '@/components/LikeButton/LikeButton';

export default function Home() {
	return (
		<div className={styles.main}>
			<Logo />
			<PostCard />
			<LikeButton />
		</div>
	);
}