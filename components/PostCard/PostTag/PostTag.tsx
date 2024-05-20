import {Themes} from '@/interface/news';

interface PostTagProps {
    className?: string;
    data: Themes
}

export default function PostTag({className, data}: PostTagProps) {
	const subThemes = Object.values(data);
	const AllTags: string[] = subThemes.map(theme => theme?.slug);

	if (AllTags.length == 0) {
		return;
	}

	return (
		<>
			{AllTags.slice(0, 2).map(tag => <div key={tag} className={className}>{tag}</div>)}
		</>
	);
};