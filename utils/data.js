// Sample data to be inserted into the MongoDB database
const userData = [
    {
        username: "johnDoe",
        email: "johndoe@example.com",
        thoughts: [],  // Assuming you would fill this with ObjectIds from the Thought collection
        friends: []  // Assuming you would fill this with ObjectIds from the User collection
    },
    {
        username: "janeDoe",
        email: "janedoe@example.com",
        thoughts: [], 
        friends: []
    }
];

module.exports = userData;
