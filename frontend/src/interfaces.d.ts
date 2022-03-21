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


export {
    UserInfo,
    CitationCreated
}