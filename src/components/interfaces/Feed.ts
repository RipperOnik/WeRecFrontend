type Feed = {
    id: number,
    title: string,
    // author: string,
    // averageRating: number,
    // totalReviewCount: number,
    description: string,
    // visiiblity: "public" | "private",
    // tags: string[],
    // isMyCard: boolean
    numberOfVideosPerRequest: number,
    keyword: string,
    sourceLinks: string[]
}

export default Feed
