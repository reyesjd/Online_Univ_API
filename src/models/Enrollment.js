import mongoose from 'mongoose';

const EnrollmentSchema = mongoose.Schema({
    semester: {
        type: Number,
        required: true
    },
    
});
