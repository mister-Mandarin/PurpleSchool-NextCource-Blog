import LikeIcon from './like.svg';
import styles from './LikeCounter.module.css';

interface LikeCounterProps {
    numberLikes?: number
}

export default function LikeCounter({numberLikes}: LikeCounterProps) {
	return (
		<span className={styles.like}>
			{numberLikes ? numberLikes : ''}
			<LikeIcon />
		</span>
	);
}