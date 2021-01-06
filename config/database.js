const Sequelize = require('sequelize');
module.exports = new Sequelize("express_gigs", "root", "", {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});


// this is old
// const Sequelize = require('sequelize');
// const dotenv = require('dotenv');
//
// dotenv.config();
//
// module.exports =  new Sequelize(process.env.DATABASE_URL, {
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,
//
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });