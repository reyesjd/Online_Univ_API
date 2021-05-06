import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	departament: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Careers', careerSchema);
