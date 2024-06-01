import {notFound} from 'next/navigation';
import {News, NewsData} from '@/interface/news';
import {getCurrentNewsById} from '@/api/getCurretNewsById';
import PageNews from '@/pages/PageNews/PageNews';

export default async function currentNews({params}: { params: { idnews: string } }) {

	const {data}: NewsData = await getCurrentNewsById(Number(params.idnews));

	if (Object.keys(data).length === 0) {
		notFound();
	}

	const news = (data as News);

	return <PageNews {...news}/>;
} 