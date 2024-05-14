import {Themes} from '@/interface/news';

interface PostTagProps {
    className?: string;
    data: Themes
}

export default function PostTag({className, data}: PostTagProps) {
	const subThemes = Object.values(data);
	const AllTags: string[] = subThemes.map(theme => theme?.slug);

	function getRandomTags(tags: string[], count: number): string[] {
		const shuffled = tags.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const tags: string[] = getRandomTags(AllTags, 2);

	return (
		<>
			{tags && tags.map(tag => <div key={tag} className={className}>{tag}</div>)}
		</>
	);
};