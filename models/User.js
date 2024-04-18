const { Schema, model } = require('mongoose');

// Define the User schema
const userSchema = new Schema(
  {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
{
  toJSON: {
    virtuals: true, 
  },
  id: false  
});

// Virtual for friendCount
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create and export the model
const User = model('user', userSchema);
module.exports = User;
