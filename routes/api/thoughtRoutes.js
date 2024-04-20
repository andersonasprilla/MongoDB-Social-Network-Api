const router = require('express').Router()

const { getAllThoughts, createThought } = require('../../controllers/thougthController')

router
.route('/')
.get(getAllThoughts)
.post(createThought)


module.exports = router