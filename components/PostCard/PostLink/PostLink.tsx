import styles from './PostLink.module.css';
import ArrowIcon from './arrow.svg';

export default function PostLink() {

	return (
		<div className={styles.link}>
            Читать
			<ArrowIcon />
		</div>
	);
}