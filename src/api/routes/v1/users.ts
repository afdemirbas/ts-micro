import express from 'express';
import controllers from '../../controllers';
const router = express.Router();

router.get('/', controllers.UserController);
router.post('/');
router.put('/:id');

export default router;
