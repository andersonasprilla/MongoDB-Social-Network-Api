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
        if(!thought) {
            return res.status(500).json({ message: 'No thought with that id'})
        }
        return res.json(thought)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

const createThought = async (req, res) => {
    try {
        // Check for an existing thought with the same text and user
        const existingThought = await Thought.findOne({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        });

        if (existingThought) {
            return res.status(409).json({ message: 'Duplicate thought: This thought has already been posted.' });
        }

        // Create the new thought
        const thought = await Thought.create(req.body);

        // Update user's thoughts list
        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
        );

        return res.json(thought);
    } catch (err) {
        return res.status(500).json(err);
    }
}

const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        
        if(!thought) {
            return res.status(400).json({ message: 'No thought with that id'})
        }

        return res.json(thought)
    } catch (err) {
        return res.ststus(500).json(err)
    }
}


module.exports = {getAllThoughts, createThought, getThoughtById, updateThought }

