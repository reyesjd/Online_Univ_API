import Career from '../models/Career.js';

export const getCareers = async (req, res) => {
	try {
		const careers = await Career.find();
		res.json(careers);
	} catch (error) {
		res.json({ message: error });
	}
};

export const addCareer = async (req, res) => {
	try {
		const values = req.body;
		await Career.insertMany(values);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
};

export const getCareerByName = async (req, res) => {
	try {
		const career = await Career.findOne({ name: req.params.care_name });
		res.json(career);
	} catch (error) {
		res.json({ message: error });
	}
};

export const getCareerById = async (req, res) => {
	try {
		const career = await Career.findById(req.params.care_id);
		res.json(career);
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteCareerByName = async (req, res) => {
	try {
		const removedCareer = await Career.remove({ name: req.params.care_name });
		res.json(removedCareer);
	} catch (error) {
		res.json({ message: error });
	}
};

export const deleteCareerById = async (req, res) => {
	try {
		const removedCareer = await Career.findByIdAndRemove(req.params.care_id);
		res.json(removedCareer);
	} catch (error) {
		res.json({ message: error });
	}
};
