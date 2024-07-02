import {delay} from '@/helpers/delay';
import {newComment} from '@/interface/comments';

export async function patchComment(rawFormData: newComment){

	await delay(3000);

	const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'PATCH',
		body: JSON.stringify({
			commentData: rawFormData
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});

	return res.json();
}