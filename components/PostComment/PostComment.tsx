import {Comment} from '@/interface/comments';
import styles from './PostComment.module.css';
export default function PostComment(comment: Comment) {
	return (
		<>
			<div className={styles.email}>{comment.email}</div>
			<div className={styles.name}>{comment.name}</div>
			<p className={styles.body}>{comment.body}</p>
		</>
	);
};