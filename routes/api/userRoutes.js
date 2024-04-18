const router = require('express').Router();
const { getUsers, createUser, getUserById, updateUser} = require('../../controllers/userController')

// /api/users
router
.route('/')
.get(getUsers)
.post(createUser)

// /api/users/:userId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)

module.exports = router;