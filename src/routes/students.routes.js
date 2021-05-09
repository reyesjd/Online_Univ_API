import express from 'express';
import * as studentController from '../controllers/students.controller.js';
import * as auth from '../controllers/authentication.manager.js';

const router = express.Router();

/**
 * Return all the students
 */
router.get('/', studentController.getStudents);

/**
 * Add a new student
 */
router.post('/', studentController.addStudent);

router.post('/login', studentController.loginChecker);
/**
 * Returns a specific student by id
 */
router.get('/info', auth.checkToken, studentController.getStudentById);

/**
 * Returns a student's previous semester grades by their id
 */
router.get('/grades/', auth.checkToken, studentController.getOldGradesById);

/**
 * Delete a student
 */
router.delete('/:stud_id', studentController.deleteStudentById);

/**
 * Update a student
 */
router.put('/', auth.checkToken, studentController.updateStudent);

export default router;
