import * as postService from "../services/post"


export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,

            msg: "fail at post" + error
        })

    }
}

export const getPostsLimit = async (req, res) => {
    const { page ,...query } = req.query

    try {
        const response = await postService.getPostsLimitService(page , query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "fail at post" + error
        })

    }
}