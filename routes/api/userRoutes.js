const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getUserById, 
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController')

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
.delete(deleteUser)

// /api/users/:userId/friends
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;