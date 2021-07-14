
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 5,
        post_id: 1,
        comment_text: "Wow"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Awesomed"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "YOOOOOOOOOOOOOOOOOOOOOOOOOo!"
    },
    {
        user_id: 6,
        post_id: 1,
        comment_text: "IM THE BEST!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Your mom is a tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;