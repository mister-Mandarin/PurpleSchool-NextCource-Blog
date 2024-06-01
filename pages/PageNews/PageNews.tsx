import {News} from '@/interface/news';
import styles from './PageNews.module.css';
import PostTag from '@/components/PostTag/PostTag';
import LikeCounter from '@/components/LikeCounter/LikeCounter';
import {formatTimeAgo} from '@/helpers/formatTime';

export default function PageNews(NewsData: News) {
	const attributes = NewsData.attributes;
	const postDate = formatTimeAgo(new Date(attributes.publishOn));

	return (
		<div>
			<h1 className={styles.title}>{attributes.title}</h1>
			<div className={styles.postTitle}>
				<PostTag size='large' data={attributes.themes} />
				<div className={styles.date}>{postDate}</div>
				<div className={styles.readingTime}>3 минуты</div>
				<LikeCounter numberLikes={Number(NewsData.id)} />
			</div>
			<article className={styles.article} dangerouslySetInnerHTML={{__html: attributes.content}}/>
		</div>
	);
}