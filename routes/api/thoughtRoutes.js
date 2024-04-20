const router = require('express').Router()

const { 
    getAllThoughts, 
    createThought,
    getThoughtById,
    updateThought

} = require('../../controllers/thougthController')

router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought) 


module.exports = router