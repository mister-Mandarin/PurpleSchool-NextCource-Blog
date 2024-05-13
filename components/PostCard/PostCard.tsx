import styles from './PostCard.module.css';
import Image from 'next/image';
import CardIcon from './template.png';
import {HTMLAttributes} from 'react';
import LikeCounter from '@/components/LikeCounter/LikeCounter';
import PostLink from '@/components/PostCard/PostLink/PostLink';

interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
}

export default function PostCard() {

	return (
		<article className={styles.card}>
			<Image className={styles.image} src={CardIcon} alt='карточка'/>
			<div className={styles.preHeader}>
				<div className={styles.tag}>Front-end</div>
				<div className={styles.tag}>Back-end</div>
				<div className={styles.date}>{new Date().toDateString()}</div>
				<LikeCounter numberLikes={4} />
			</div>
			<h2 className={styles.title}>Как работать с CSS Grid</h2>
			<p className={styles.description}>Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы. Гриды подойдут и для верстки основных областей страницы. Гриды подойдут и для верстки основных областей страницы. Гриды подойдут и для верстки основных областей страницы.</p>
			<div className={styles.footer}>
				<div >3 минуты</div>
				<PostLink />
			</div>
		</article>
	);
}