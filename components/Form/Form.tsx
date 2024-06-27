'use client';
import styles from './Form.module.css';
import {FormEvent, useState} from 'react';
import {patchComment} from '@/api/patchComment';
import {newComment} from '@/interface/comments';

export default function Form() {
	const [pending, setPending] = useState(false);

	async function formAction(event: FormEvent<HTMLFormElement>) {
		setPending(true);
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const rawFormData = Object.fromEntries(formData) as unknown as newComment;

		try {
			await patchComment(rawFormData);
		} catch (error) {
			console.error('Ошибка при отправке комментария', error);
		} finally {
			(event.target as HTMLFormElement).reset();
			setPending(false);
		}
	}

	return (
		<form className={styles.form} onSubmit={formAction} >
			<input type="text" name="name" placeholder="Ваше имя" required />
			<input type="email" name="email" placeholder="E-mail" required />
			<textarea name="comment" placeholder="Комментарий" required />
			<button type="submit" disabled={pending}>
				{pending ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
	);
};