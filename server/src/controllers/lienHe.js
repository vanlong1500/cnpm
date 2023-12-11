import * as lienHeService from "../services/lienHe"


export const getLienHe = async (req, res) => {
    try {
        const response = await lienHeService.getLienHeService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,

            msg: "fail at post" + error
        })

    }
}