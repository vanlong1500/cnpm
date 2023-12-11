import db from '../models'

//get CURRent
export const getLienHeService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            where: { id },
            raw: true,
            user: ['id', 'name', 'phone', 'createdAt', 'updatedAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'ok' : ' faill to get user',
            response
        })
    } catch (error) {
        reject(error)
    }
})