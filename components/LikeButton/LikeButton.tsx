'use client';

import {useState} from 'react';
import EmptyIcon from './LikeEmpty.svg';
import PaintIcon from './LikePaint.svg';
import styles from './LikeButton.module.css';

export default function LikeButton() {
	const [like, setLike] = useState<boolean>(false);

	return (
		<div className={styles.likeButton} onClick={() => setLike(!like)}>
			{like ? <PaintIcon /> : <EmptyIcon />}
		</div>
	);
}