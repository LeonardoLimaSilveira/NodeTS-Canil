import { Router } from 'express'
import { cats, dogs, fish, home } from '../controllers/page.controller'
import { search } from '../controllers/search.controller'

const router = Router()

router.get('/', home)
router.get('/dogs', dogs)
router.get('/cats', cats)
router.get('/fish', fish)

router.get('/search', search)

export default router
