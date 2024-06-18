import {notFound} from 'next/navigation';
import {News, NewsData} from '@/interface/news';
import {getCurrentNewsById} from '@/api/getCurretNewsById';
import PageNews from '@/pages/PageNews/PageNews';
import {getComments} from '@/api/getComments';
import {Comment} from '@/interface/comments';

export default async function currentNews({params}: { params: { idnews: string } }) {

	const {data}: NewsData = await getCurrentNewsById(Number(params.idnews));
	const random100 = Math.floor(Math.random() * 100);
	const randomComments: Comment[] = await getComments(random100);

	if (Object.keys(data).length === 0) {
		notFound();
	}

	const news = (data as News);

	return <PageNews NewsData={news} randomComments={randomComments} />;
} 