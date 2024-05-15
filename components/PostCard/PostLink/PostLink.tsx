import styles from './PostLink.module.css';
import ArrowIcon from './arrow.svg';
import Link from 'next/link';

interface PostLinkProps {
	idnews: string
}

export default function PostLink({idnews}: PostLinkProps) {
	return (
		<Link className={styles.link} href={`/${idnews}`}>
            Читать
			<ArrowIcon />
		</Link>
	);
}