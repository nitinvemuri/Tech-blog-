const seedsPost = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedsUser = require('./user-seeds');
const sequelize = require('../Config/connection');

const workingSeeds = async () => {
    await sequelize.sync({ force: true});
    console.log('synced');

    await seedsPost();
    console.log('post seed');

    await seedComments();
    console.log('commnets seed');

    await seedsUser();
    console.log('User seed')

    process.exit(0);
};

workingSeeds();