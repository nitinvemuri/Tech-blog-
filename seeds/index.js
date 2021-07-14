const seedsPost = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedsUser = require('./user-seeds');
const sequelize = require('../config/connection');

const workingSeeds = async () => {
    await sequelize.sync({ force: true});
    console.log('Synced');

    await seedsPost();
    console.log('post seed is through');

    await seedComments();
    console.log('commnets seed is through');

    await seedsUser();
    console.log('User seed is through')

    process.exit(0);
};

workingSeeds();