import {NewsData} from '@/interface/news';

export async function getCurrentNewsById(id: number): Promise<NewsData> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_FIND_BY_ID}?id=${id}`, {
		method: 'GET',
		// @ts-ignore
		headers: {
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
		}
	});

	if (response.status == 204) {
		console.log('Network response is null');
		return {data: {}};
	}

	return response.json();
}