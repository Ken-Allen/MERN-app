const express = require('express')
const { getWorkouts, 
        getWorkout, 
        createWorkout, 
        deleteWorkout, 
        updateWorkout} 
        = require('../controllers/workoutController')


const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET single workouts
router.get('/:id', getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE workout
router.delete('/:id', deleteWorkout)

//UPDATE workout
router.patch('/:id', updateWorkout)


module.exports = router