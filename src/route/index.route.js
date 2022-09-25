import { Router } from 'express'

const router = Router()

import { ping } from '../controller/index.controller.js'
router.get('/ping', ping );

export default router;