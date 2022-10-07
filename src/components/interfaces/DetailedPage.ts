type DetailedPage = {
    id: string,
    title: string,
    author: string,
    averageRating: number,
    totalReviewCount: number,
    description: string,
    visiiblity: "public" | "private",
    tags: string[],
    isMyCard: boolean
}

export default DetailedPage
