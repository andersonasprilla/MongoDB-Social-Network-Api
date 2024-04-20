const { Thought, User } = require('../models')

const getAllThoughts = async (req, res) => {
    try {
         const thoughts = await Thought.find()
         return res.json(thoughts);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

const getThoughtById = async(req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId})
    } catch (err) {
        
    }
}

const createThought = async(req, res) => {
    try {
        const thought = await Thought.create(req.body)

        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id} } ,
            { new: true, runValidators: true }
        )
        return res.json(thought)
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {getAllThoughts, createThought}

