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
    id: string
    userId: string
    citations: [
        {
            source: string
            excerpt: string
            coordinates: string
        }
    ]
}


export {
    UserInfo,
    CitationCreated
}