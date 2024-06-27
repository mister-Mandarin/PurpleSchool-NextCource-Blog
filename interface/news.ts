export interface NewsData {
    data: News[] | {};
}

export interface News {
    id: string
    type: string
    attributes: Attributes
    links: Links
}

export interface Attributes {
    publishOn: Date
    isLockedPro: boolean
    commentCount: number
    gettyImageUrl?: string
    videoPreviewUrl?: string
    themes: Themes
    title: string
    isPaywalled: boolean
    lastModified: Date
    isExclusive: boolean
    status: string
    content: string
    metered: boolean
    correctionReason?: string
}

export interface Themes {
    [key: string]: ThemesProps;
}

export interface ThemesProps {
    id: number;
    path: string;
    slug: string;
    title: any;
    sasource: string;
    non_theme: boolean;
}

export interface Links {
    self: string
    canonical: string
    uriImage: string
}