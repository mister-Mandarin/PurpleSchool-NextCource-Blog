export async function getCurrentNewsById(id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_FIND_BY_ID}?id=${id}`, {
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