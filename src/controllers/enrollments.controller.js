import Enrollment from '../models/Enrollment.js';
import Student from '../models/Student.js';
export const getEnrollments = async (req, res) => {
	try {
		const enrollment = await Enrollment.find({}).populate('student');

		res.json(enrollment);
	} catch (error) {
		res.json({ message: error });
	}
};

export const addEnrollment = async (req, res) => {
	try {
		const values = req.body;
		values.startDate = new Date(values.startDate);
		values.finalDate = new Date(values.finalDate);
		await Enrollment.insertMany(values);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getEnrollmentByStudent = async (req, res) => {
	try {
		const enrollment = await Enrollment.find({ student: req.params.stud_id });
		res.json(enrollment);
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteEnrollmentById = async (req, res) => {
	try {
		const removedEnrollment = await Enrollment.findByIdAndDelete(
			req.params.enro_id
		);
		res.json(removedEnrollment);
	} catch (error) {
		res.json({ message: error });
	}
};

export const updateEnrollment = async (req, res) => {
	try {
		const newEnrollment = req.body;
		await Enrollment.findByIdAndUpdate(req.params.enro_id, newEnrollment);
		res.status(200).json({ success: true });
	} catch (error) {
		res.json({ message: error });
	}
};
