import mongoose from 'mongoose';
const EnrollmentSchema = mongoose.Schema({
	semester: {
		type: Number,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	finalDate: {
		type: Date,
		required: true,
	},
	career: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'careers',
		required: true,
	},
	finalGrade: {
		type: Number
	},
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'students',
		required: true,
	}
	
});
export default mongoose.model('enrollments', EnrollmentSchema);
