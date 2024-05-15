import allNewsData from '@/helpers/allNewsData';
import {notFound} from 'next/navigation';
import {News} from '@/interface/news';

export default async function currentNews({params}: { params: { idnews: string } }) {

	const a= await allNewsData();
	const allNews: News[] = a.flatMap(newsGroup => newsGroup);
	const findCurrentNewsIds = allNews.map(news => news.id);
	const find = findCurrentNewsIds.find(f => f == params.idnews);

	if (!find) {
		notFound();
	}

	return (
		<>
			<p>Это страница новости с id {params.idnews}</p>
		</>
	);
}