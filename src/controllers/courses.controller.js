import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
	try {
		const courses = await Course.find();
		res.json(courses);
	} catch (error) {
		res.json({ message: error });
	}
};

export const addCourse = async (req, res) => {
	try {
		const newCourse = new Course(req.body);
		const course = await newCourse.save();
		res.status(200).json(course);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getCourseById = async (req, res) => {
	try {
		const course = await Course.findOne({ nrc: req.params.nrc });
		res.json(course);
	} catch (error) {
		res.json({ message: error });
	}
};

export const getCoursesByCareer = async (req, res) => {
	try {
		const courses = await Course.find({ career: req.params.care_code });
		res.json(courses);
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteCourse = async (req, res) => {
	try {
		const removedCourse = await Course.remove({ nrc: req.params.nrc });
		res.json(removedCourse);
	} catch (error) {
		res.json({ message: error });
	}
};
