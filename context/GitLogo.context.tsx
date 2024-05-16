'use client';
import {createContext, ReactNode} from 'react';
export const GitLogoContext = createContext({img: '', link: '', alt: ''});

export default function GitLogoProvider({
	children
}: {
	children: ReactNode
}) {
	const gitLogoData = {
		img: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
		link: 'https://github.com/mister-Mandarin/PurpleSchool-NextCource-Blog',
		alt: 'GitLogo'
	};

	return (
		<GitLogoContext.Provider value={gitLogoData}>
			{children}
		</GitLogoContext.Provider>
	);
}