import {News, NewsData} from '@/interface/news';
import {getNews} from '@/api/getNews';
import {getCurrentNewsById} from '@/api/getCurretNewsById';

export default async function allNewsData() {
	const allLinks = [];

	const rootData: NewsData = await getNews();
	const news: string[] = rootData.data.flatMap(m => m.id);

	for (let i = 0; i < news.length; i++) {
		const currentNews: NewsData = await getCurrentNewsById(Number(news[i]));
		allLinks.push(currentNews.data);
	}

	return allLinks;
}