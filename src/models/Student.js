import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
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
	country: {
		type: String,
	},
	city: {
		type: String,
	},
	phone: {
		type: Number,
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	career: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'careers',
		required: true,
	},
});

export default mongoose.model('students', StudentSchema);
