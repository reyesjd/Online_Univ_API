import express from 'express';
import * as professorController from '../controllers/professors.controller.js';
const router = express.Router();

/**
 * Return all the professors
 */
router.get('/', professorController.getProfessors);

/**
 * Add a new professor
 */
router.post('/', professorController.addProfessor);

/**
 * Returns a specific professor by id
 */
router.get('/:prof_id', professorController.getProfessorById);

/**
 * Delete a professor
 */
router.delete('/:prof_id', professorController.deleteProfessorById);

/**
 * Update a professor
 */
router.put('/:prof_id', professorController.updateProfessor);

export default router;
