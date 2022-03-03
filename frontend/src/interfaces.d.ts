interface UserInfo {
    _id?: string
    name?: string
    email?: string
    password?: string
    isAdmin?: boolean
    status?: 'Active' | 'Pending'
}

interface ArticleById {
    _id: string
    topline: string
    headline: string
    subtitle: string
    author: string
    imgLink: string
    createdAt: string
}
interface ArticleCreated {
    topline: string
    headline: string
    subtitle: string
    author: string
    imgLink: string
}

export {
    UserInfo,
    ArticleById,
    ArticleCreated
}