const { ObjectId } = require('mongoose').Types
const { userInfo } = require('os')
const { User } = require('../models/User')

module.exports = {
    async getUser(req, res) {
        try {
            const user = await User.find()
            const userObj = { user }
            return res.json(userObj)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
