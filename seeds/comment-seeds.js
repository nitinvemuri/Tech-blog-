
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 5,
        post_id: 1,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "This is great news!"
    },
    {
        user_id: 6,
        post_id: 1,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;