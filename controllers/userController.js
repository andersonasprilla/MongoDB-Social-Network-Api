const { User } =  require('../models');

const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json({ message: `${user.username} has been deleted` });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const addFriend = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $addToSet: { friends: req.params.friendId } }, 
      { new: true } 
    );

    if (!user) {
      return res.status(404).json({ message: 'No user found with this ID' });
    }
    return res.json({ message: `Friend added successfully`, user: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteFriend = async (req, res) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;

  try {
      const user = await User.findOneAndUpdate(
          { _id: userId }, 
          { $pull: { friends: friendId } },
          { new: true }
      );
      if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
      }

      return res.json({ message: `Friend removed successfully`, user: user });
  } catch (err) {
      console.log(err);
      return res.status(500).json(err);
  }
}

module.exports =  { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend };
