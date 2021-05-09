import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const studentCourses = new mongoose.Schema(
	{
		course: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		grades: {
			type: [Number],
		},
	},
	{ _id: false }
);
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
	courses: {
		type: [studentCourses],
	},
});

StudentSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt();
	return await bcrypt.hash(password, salt);
};

StudentSchema.methods.validatePassword = async function (pass) {
	return await bcrypt.compare(pass, this.password);
};

export default mongoose.model('students', StudentSchema);
