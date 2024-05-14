// Апи отсюда
// https://rapidapi.com/ru/apidojo/api/seeking-alpha/
import {News, NewsData} from '@/interface/news';

export async function getNews() {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL
		+ '?category=orange&size=2&number=1', {
		method: 'GET',
		// @ts-ignore
		headers: {
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
		}
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return response.json();
}