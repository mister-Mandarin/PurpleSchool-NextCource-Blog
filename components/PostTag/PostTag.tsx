import {Themes} from '@/interface/news';
import styles from './PostTag.module.css';

interface PostTagProps {
    className?: string;
    data: Themes;
	size: 'short' | 'large';
}

export default function PostTag({data, size}: PostTagProps) {
	const subThemes = Object.values(data);
	const AllTags: string[] = subThemes.map(theme => theme?.slug);

	if (!AllTags.length) return null;

	const tagCount = size === 'short' ? 2 : 8;

	return (
		<ul className={styles.listTags}>
			{AllTags.slice(0, tagCount).map(tag => (
				<li key={tag} className={styles.tag}>
					{tag}
				</li>
			))}
		</ul>
	);
};