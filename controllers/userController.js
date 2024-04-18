const { User } = require('../models')

module.exports = {

    //Get all users
    async getUsers(req, res) {
        try {
          const user = await User.find();
          return res.json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

    //Get user by Id
    async getUserById(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
        if(!user) {
          return res.status(404).json({ message: 'No user with that ID'})
        }
        res.json(user)
      } catch (err) {
        console.log(err)
        return res.status(500).json(err)
      }
    },

    //Create user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //Update user
    async updateUser(req, res) {
      try {
        const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )

        if(!user) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(user)
      } catch (err) {
        res.status(500).json(err)
      }
    },

    //Delete user
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ 
          _id: req.params.userId
        })

        if(!user) {
          return res.status(404).json({ message: 'No user with that ID'})
        }
        res.json({ message: `${user.username} has been deleted`})
      } catch (err) {
        res.status(500).json(err);
      }
    }
}
