export async function getComments(id: number) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		.then((response) => response.json());
	if (response.length > 0) {
		return response;
	} else return [];
}