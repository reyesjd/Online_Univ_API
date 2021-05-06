import mongoose from 'mongoose';

const ProfessorSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	career: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'careers',
		required: true,
	},
});

export default mongoose.model('professor', ProfessorSchema);
