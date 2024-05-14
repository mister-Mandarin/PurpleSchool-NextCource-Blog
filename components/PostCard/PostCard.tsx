import styles from './PostCard.module.css';
import Image from 'next/image';
import LikeCounter from '@/components/LikeCounter/LikeCounter';
import PostLink from '@/components/PostCard/PostLink/PostLink';
import {News} from '@/interface/news';
import {formatTimeAgo} from './formatTime';
import PostTag from '@/components/PostCard/PostTag/PostTag';

export default function PostCard({...props}: News) {
	const postDate = formatTimeAgo(new Date(props.attributes.publishOn));

	return (
		<article className={styles.card}>
			<img className={styles.image} src={props.links.uriImage} alt='карточка'/>
			<div className={styles.preHeader}>
				<PostTag className={styles.tag} data={props.attributes.themes} />
				<div className={styles.date}>{postDate}</div>
				<LikeCounter numberLikes={Number(props.id)} />
			</div>
			<h2 className={styles.title}>{props.attributes.title}</h2>
			<p className={styles.description}>{props.attributes.content}</p>
			<div className={styles.footer}>
				<div >3 минуты</div>
				<PostLink />
			</div>
		</article>
	);
}