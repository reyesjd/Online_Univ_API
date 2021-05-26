import Student from '../models/Student.js';
import Enrollment from '../models/Enrollment.js';
import * as auth from './authentication.manager.js';

export const getStudents = async (req, res) => {
	try {
		const students = await Student.find();
		res.json(students);
	} catch (error) {
		res.json({ message: error });
	}
};

export const addStudent = async (req, res) => {
	try {
		const newStudent = new Student(req.body);
		newStudent.password = await newStudent.encryptPassword(newStudent.password);
		await newStudent.save();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getStudentById = async (req, res) => {
	try {
		const student = await Student.findOne({ id: req.user })
			.populate('career')
			.populate({
				path: 'courses',
				populate: {
					path: 'course',
					model: 'courses',
					populate: {
						path: 'professor',
						model: 'professors'
					}
				},
			})
			.exec();
		res.json({ user: student });
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteStudentById = async (req, res) => {
	try {
		const removedStudent = await Student.deleteOne({ id: req.params.stud_id });
		res.json(removedStudent);
	} catch (error) {
		res.json({ message: error });
	}
};

export const updateStudent = async (req, res) => {
	try {
		const newStudent = req.body;
		await Student.findOneAndUpdate({ id: req.user }, newStudent);
		res.status(200).json({ success: true });
	} catch (error) {
		res.json({ message: error });
	}
};

export const getOldGradesById = async (req, res) => {
	try {
		const findStudent = await Student.find({ id: req.user });
		const grades = await Enrollment.find({ student: findStudent }).select(
			'semester finalGrade'
		);
		res.json(grades);
	} catch (error) {
		res.json({ message: error });
	}
};
export const getCurrentCourses = async (req, res) => {
	try {
		const findStudent = await Student.find({ id: req.user });
		res.json(findStudent.courses);
	} catch (error) {
		res.json({ message: error });
	}
};

export const loginChecker = async (req, res) => {
	try {
		const findStudent = await Student.findOne({
			username: req.body.username,
		})
			.populate('career')
			.populate({
				path: 'courses',
				populate: {
					path: 'course',
					model: 'courses',
				},
			})
			.populate({
				path: 'course',
				populate: {
					path: 'professors',
					model: 'professors',
				},
			})
			.exec();
		if (!findStudent) {
			res.status(401).json({ auth: false, token: null });
		} else {
			const passwordIsValid = await findStudent.validatePassword(
				req.body.password
			);
			if (!passwordIsValid) {
				res.status(401).json({ auth: false, token: null });
			} else {
				const newToken = auth.createToken(findStudent);
				res
					.status(200)
					.json({ auth: true, token: newToken, user: findStudent });
			}
		}
	} catch (error) {
		res.status(400).json({ Error: error });
	}
};
