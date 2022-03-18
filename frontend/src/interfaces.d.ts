interface UserInfo {
    _id?: string
    name?: string
    email?: string
    password?: string
    isAdmin?: boolean
    status?: 'Active' | 'Pending'
}

interface FragmentCreated {
    _id: string
    topline: string
    headline: string
    subtitle: string
    author: string
    imgLink: string
    createdAt: string
}


export {
    UserInfo,
    FragmentCreated
}