import PostCard from '@/components/PostCard/PostCard';
import LikeButton from '@/components/LikeButton/LikeButton';
import {getNews} from '@/api/news';
import {News, NewsData} from '@/interface/news';

export default async function Home() {
	const rootData: NewsData = await getNews();
	const news: News[] = rootData.data;

	return (
		<>
			{news && news.map(post => <PostCard key={post.id} {...post}/>)}
			<LikeButton />
		</>
	);
}