const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')

const userController = require('../controllers/user-controller')

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

router.get('/', auth, userController.getUser)
router.get('/:id/avatar', userController.getUserAvatar)
router.post('/', userController.saveUser)
router.post('/login', userController.loginUser)
router.post('/logout', auth, userController.logoutUser)
router.post('/logout-all', auth, userController.logoutAllUsers)
router.put('/', auth, userController.updateUser)
router.patch('/', auth, upload.single('avatar'), userController.uploadUserAvatar)
router.delete('/', auth, userController.deleteUser)
router.delete('/avatar', auth, userController.deleteUserAvatar)

module.exports = router