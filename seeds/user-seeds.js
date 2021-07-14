const { User } = require('../models');

const userData = [
    {
        email: "andyOW@gmail.com",
        password: "word1"
    },
    {
        email: "MattStoniE@gmail.com",
        password: "d2"
    },
    {
        email: "yunglean@gmail.com",
        password: "p3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;