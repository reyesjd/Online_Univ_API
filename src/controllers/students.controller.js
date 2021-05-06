import Student from '../models/Student.js';

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
		const values = req.body;
		await Student.insertMany(values);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getStudentById = async (req, res) => {
	try {
		const student = await Student.find({ id: req.params.stud_id });
		res.json(student);
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
		await Student.findOneAndUpdate({ "id": req.params.stud_id }, newStudent);
		res.status(200).json({ success: true });
	} catch (error) {
		res.json({ message: error });
	}
};
