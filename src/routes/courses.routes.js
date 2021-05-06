import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

/**
 * Return all the courses
 */
router.get('/', async (req, res) => {
	try {
		const courses = await Course.find();
		res.json(courses);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res) => {
	try {
        const newCourse = new Course(req.body);
        const course = await newCourse.save();
        res.status(200).json(course);
	} catch (error) {
        res.status(404).json(error);
    }
});

/**
 * Returns a specific course by nrc
 */
router.get('/:nrc', async (req, res) => {
	try {
		const course = await Course.findOne({ nrc: req.params.nrc });
		res.json(course);
	} catch (error) {
		res.json({ message: error });
	}
});

/**
 * Returns all courses of a subject
 */
router.get('/subj/:subj_code', async (req, res) => {
	try {
		const courses = await Course.find({ subj_code: req.params.subj_code });
		res.json(courses);
	} catch (error) {
		res.json({ message: error });
	}
});

/**
 * Delete a course
 */
router.delete('/:nrc', async (req, res) => {
	try {
		const removedCourse = await Course.remove({ nrc: req.params.nrc });
		res.json(removedCourse);
	} catch (error) {
		res.json({ message: error });
	}
});

export default router;
