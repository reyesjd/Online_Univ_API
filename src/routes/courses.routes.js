import express from 'express';
import * as coursesController from '../controllers/courses.controller.js';
const router = express.Router();

/**
 * Return all the courses
 */
router.get('/', coursesController.getCourses);

/**
 * Add a new course
 */
router.post('/', coursesController.addCourse);

/**
 * Returns a specific course by nrc
 */
router.get('/:nrc', coursesController.getCourseById);

/**
 * Returns all courses of a career
 */
router.get('/career/:care_code', coursesController.getCoursesByCareer);

/**
 * Delete a course
 */
router.delete('/:nrc', coursesController.deleteCourse);

export default router;
