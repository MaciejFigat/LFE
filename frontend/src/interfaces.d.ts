interface UserInfo {
    _id?: string
    name?: string
    email?: string
    password?: string
    isAdmin?: boolean
    status?: 'Active' | 'Pending'
}

interface CitationCreated {
    _id: string

    createdAt: string
}
interface FragmentCreated {
    _id?: string
    userId?: string
    source?: string
    excerpt?: string
    coordinates?: string
    title?: string
    description?: string
    // docId?: string
    docId?: number
    query?: string
    keywords?: string[]

    keywordValue?: {
        keyword?: string
        value?: boolean
        labelOne?: string
        labelTwo?: string
        skip?: boolean
    }[]
}
interface UserFragments {
    // id: string
    _id?: string
    userId?: string
    source?: string
    excerpt?: string
    coordinates?: string
    title?: string
    description?: string
    keywords?: string[]
}
// Interface for the keyword searched object in the fragment object
interface KeywordValue {
    keyword: string
    value: boolean
    skip: boolean
    labelOne: string
    labelTwo: string
}
// fragment from the store
interface FragmentStored {
    _id: string
    user: string
    source: string
    excerpt: string
    coordinates?: string
    title?: string
    description?: string
    docId: number
    query: string
    keywords: string[] | []
    updatedAt?: string
    keywordValue: KeywordValue[] | []
}
interface FragmentStoredAllData {
    _id: string
    user: string
    source: string
    excerpt: string
    coordinates: string
    title: string
    description: string
    docId: number
    query: string
    keywords: string[]
    updatedAt: string
    keywordValue: KeywordValue[] | []
}
interface FragmentStoredSimple {
    title: string
    description: string
    excerpt: string
    source: string
    updatedAt: string
    coordinates: string
    keywords: string[]
}
interface ResultsPage {
    start: number
    end: number
    pageNumber?: number

}

interface FragmentsBySource {
    KrajowaInformacjaSkarbowa: boolean;
    IzbaSkarbowa: boolean;
    MinisterFinansów: boolean;
}

interface FragmentUpdated {
    title?: string,
    excerpt?: string,
    description?: string,
}

export {
    UserInfo,
    FragmentCreated,
    UserFragments,
    FragmentStored,
    FragmentStoredAllData,
    FragmentStoredSimple,
    KeywordValue,
    ResultsPage,
    FragmentsBySource,
    FragmentUpdated
}