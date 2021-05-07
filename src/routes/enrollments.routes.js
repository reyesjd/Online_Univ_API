import express from 'express';
import * as enrollmentController from '../controllers/enrollments.controller.js';
const router = express.Router();

/**
 * Return all the enrollments
 */
router.get('/', enrollmentController.getEnrollments);

/**
 * Add a new enrollment
 */
router.post('/', enrollmentController.addEnrollment);

/**
 * Returns a specific enrollment by student id
 */
router.get('/:stud_id', enrollmentController.getEnrollmentByStudent);

/**
 * Delete a enrollment
 */
router.delete('/:enro_id', enrollmentController.deleteEnrollmentById);

/**
 * Update a enrollment
 */
router.put('/:enro_id', enrollmentController.updateEnrollment);

export default router;