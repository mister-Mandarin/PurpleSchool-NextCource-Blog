'use client';

import {useState} from 'react';
import EmptyIcon from './LikeEmpty.svg';
import PaintIcon from './LikePaint.svg';
import styles from './LikeButton.module.css';
import {setLike} from '@/api/like';


export default function LikeButton<Props>() {
	const [likeButton, setLikeButton] = useState<boolean>(false);

	async function fetchLike(id: number) {
		const k = await setLike(id);
		if (k.ok) {
			setLikeButton(!likeButton);
		}
	}

	return (
		<div className={styles.likeButton} onClick={() => fetchLike(1)}>
			{likeButton ? <PaintIcon /> : <EmptyIcon />}
		</div>
	);
}
