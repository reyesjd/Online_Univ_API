import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

/**
 * Settings
 */
app.set('port', process.env.PORT || 3000);

/**
 * Middlewares
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/**
 * Database connections
 */
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		mongoose.set('useFindAndModify', false);
		console.log('Connected to MongoDB.');
	})
	.catch((err) => console.log(err));

/**
 * Routes
 */
import coursesRoute from './routes/courses.routes.js';
import careersRoute from './routes/careers.routes.js';
import studentsRoute from './routes/students.routes.js';
import professorsRoute from './routes/professors.routes.js';
import enrollmentsRoute from './routes/enrollments.routes.js';
app.get('/api', (req, res) => {
	res.json({ message: 'Hello World!' });
});
app.use('/api/courses', coursesRoute);
app.use('/api/careers', careersRoute);
app.use('/api/students', studentsRoute);
app.use('/api/professors', professorsRoute);
app.use('/api/enrollments', enrollmentsRoute);
/**
 * Start server
 */
app.listen(app.get('port'), () => {
	console.log('Server on port ', app.get('port'));
});
