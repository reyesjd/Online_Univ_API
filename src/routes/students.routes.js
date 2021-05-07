import express from 'express';
import * as studentController from '../controllers/students.controller.js';
const router = express.Router();

/**
 * Return all the students
 */
router.get('/', studentController.getStudents);

/**
 * Add a new student
 */
router.post('/', studentController.addStudent);

/**
 * Returns a specific student by id
 */
router.get('/:stud_id', studentController.getStudentById);

/**
 * Returns a student's previous semester grades by their id
 */
router.get('/grades/:stud_id', studentController.getOldGradesById);

/**
 * Delete a student
 */
router.delete('/:stud_id', studentController.deleteStudentById);

/**
 * Update a student
 */
router.put('/:stud_id', studentController.updateStudent);

export default router;
