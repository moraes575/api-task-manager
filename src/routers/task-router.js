const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const taskController = require('../controllers/task-controller')

router.get('/', auth, taskController.getTasks)
router.get('/:id', auth, taskController.getTaskById)
router.post('/', auth, taskController.saveTask)
router.put('/:id', auth, taskController.updateTask)
router.delete('/:id', auth, taskController.deleteTask)

module.exports = router