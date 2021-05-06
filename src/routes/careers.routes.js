import express from 'express';
import * as careersController from '../controllers/careers.controller.js';
const router = express.Router();

router.get('/', careersController.getCareers);
router.post('/', careersController.addCareer);
router.get('/named/:care_name', careersController.getCareerByName);
router.get('/:care_id', careersController.getCareerById);
router.delete('/named/:care_name', careersController.deleteCareerByName);
router.delete('/:care_id', careersController.deleteCareerById);
export default router;
