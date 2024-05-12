export async function setLike(id: number) {
	 return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
		method: 'PATCH',
		body: JSON.stringify({
			title: {id}
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	})
		.then((response) => response);
}