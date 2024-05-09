import styles from './PostLink.module.css';
import ArrowIcon from './arrow.svg';
import Link from 'next/link';

export default function PostLink() {

	return (
		<Link className={styles.link} href={''}>
            Читать
			<ArrowIcon />
		</Link>
	);
}