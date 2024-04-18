const connection = require('../config/connection');
const User = require('../models/User');
const userData = require('./data'); 

connection.on('error', (err) => console.error('Connection error:', err));

connection.once('open', async () => {
  console.log('Connected to database');

  // Check if the User collection exists and drop it if it does
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // Add users to the collection and await the results
  const insertedUsers = await User.create(userData);

  // Log out the seeded data to indicate what should appear in the database
  console.table(insertedUsers);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
