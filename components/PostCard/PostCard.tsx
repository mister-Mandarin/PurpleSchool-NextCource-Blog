import styles from './PostCard.module.css';
import LikeCounter from '@/components/LikeCounter/LikeCounter';
import PostLink from '@/components/PostCard/PostLink/PostLink';
import {News} from '@/interface/news';
import {formatTimeAgo} from '@/helpers/formatTime';
import PostTag from '@/components/PostCard/PostTag/PostTag';
import {parse} from 'node-html-parser';

export default function PostCard({...props}: News) {
	const postDate = formatTimeAgo(new Date(props.attributes.publishOn));
	const description = parse(props.attributes.content);
	const numberLikes = Math.floor(Number(props.id)/10000);

	return (
		<article className={styles.card}>
			<img className={styles.image} src={props.links.uriImage} alt='карточка'/>
			<div className={styles.preHeader}>
				<PostTag className={styles.tag} data={props.attributes.themes} />
				<div className={styles.date}>{postDate}</div>
				<LikeCounter numberLikes={numberLikes} />
			</div>
			<h2 className={styles.title}>{props.attributes.title}</h2>
			<p className={styles.description}>{description.text}</p>
			<div className={styles.footer}>
				<div >3 минуты</div>
				<PostLink idnews={props.id}/>
			</div>
		</article>
	);
}