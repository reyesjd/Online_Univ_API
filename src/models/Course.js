import mongoose from 'mongoose';

const DaySchedule = new mongoose.Schema(
	{
		day: {
			type: String,
			required: true,
		},
		start_time: {
			type: Number,
			required: true,
		},
		end_time: {
			type: Number,
			required: true,
		},
	},
	{ _id: false }
);

const CourseSchema = mongoose.Schema({
	nrc: {
		type: Number,
		unique: true,
		required: true,
	},
	credits: {
		type: Number,
		required: true,
	},
	capacity: {
		type: Number,
		required: true,
	},
	taken: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	professor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'professors',
		required: true,
	},
	career: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'careers',
		required: true,
	},
	schedule: {
		type: [DaySchedule],
		required: true,
	},
});

export default mongoose.model('courses', CourseSchema);
