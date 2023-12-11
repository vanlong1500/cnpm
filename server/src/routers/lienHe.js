
import express from 'express'
import * as lienHeController from '../controllers/lienHe'


const router = express.Router()

router.get('/id', lienHeController.getLienHe)


export default router