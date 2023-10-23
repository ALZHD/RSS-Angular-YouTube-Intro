


  export interface Welcome3 {
    TODO:     string;
    kind:     string;
    etag:     string;
    pageInfo: PageInfo;
    items:    SearchItem[];
}

export interface SearchItem {
    kind:       Kind;
    etag:       string;
    id:         string;
    snippet:    Snippet;
    statistics: Statistics;
}

export interface Snippet {
    publishedAt:          Date;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    tags:                 string[];
    categoryId:           string;
    liveBroadcastContent: LiveBroadcastContent;
    localized:            Localized;
    defaultAudioLanguage: DefaultLanguage;
    defaultLanguage?:     DefaultLanguage;
}

export enum LiveBroadcastContent {
    None = "none",
}


export interface Localized {
    title:       string;
    description: string;
}


export enum DefaultLanguage {
    En = "en",
    EnUS = "en-US",
    Ru = "ru",
}

export enum Kind {
    YoutubeVideo = "youtube#video",
}


  export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}


  export interface Statistics {
    viewCount:     string;
    likeCount:     string;
    dislikeCount:  string;
    favoriteCount: string;
    commentCount:  string;
}


export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}