import PostCard from '@/components/PostCard/PostCard';
import {getNews} from '@/api/getNews';
import {News, NewsData} from '@/interface/news';
import styles from './page.module.css';

export default async function Home() {
	const {data}: NewsData = await getNews();

	if (Object.keys(data).length === 0) {
		return (
			<div>Нет данных для отображения.</div>
		);
	}

	return (
		<div className={styles.container}>
			{Object.keys(data).length > 0 && (data as News[]).map((post: News) => <PostCard key={post.id} {...post}/>)}
		</div>
	);
}