const router = require('express').Router()

const { 
    getAllThoughts, 
    createThought,
    getThoughtById,
    updateThought,
    deleteThought

} = require('../../controllers/thougthController')

router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought) 


module.exports = router