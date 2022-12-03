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


export {
    UserInfo,
    FragmentCreated,
    UserFragments,
}