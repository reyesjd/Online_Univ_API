import Professor from '../models/Professor.js';

export const getProfessors = async (req, res) => {
	try {
		const professors = await Professor.find().populate();
		res.json(professors);
	} catch (error) {
		res.json({ message: error });
	}
};

export const addProfessor = async (req, res) => {
	try {
		const values = req.body;
		await Professor.insertMany(values);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getProfessorById = async (req, res) => {
	try {
		const professor = await Professor.find({ id: req.params.prof_id });
		res.json(professor);
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteProfessorById = async (req, res) => {
	try {
		const removedProfessor = await Professor.deleteOne({
			id: req.params.prof_id,
		});
		res.json(removedProfessor);
	} catch (error) {
		res.json({ message: error });
	}
};

export const updateProfessor = async (req, res) => {
	try {
		const newProfessor = req.body;
		await Professor.findOneAndUpdate({ id: req.params.prof_id }, newProfessor);
		res.status(200).json({ success: true });
	} catch (error) {
		res.json({ message: error });
	}
};
