const Sequelize = require('sequelize');
const db = require('../config/database');

const Gigs = db.define('gigs', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

module.exports = Gigs;

//this is old
// const Sequelize = require('sequelize');
// const db = require('../config/database');
//
// const Gig = db.define('gig', {
//   title: {
//     type: Sequelize.STRING
//   },
//   technologies: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   budget: {
//     type: Sequelize.STRING
//   },
//   contact_email: {
//     type: Sequelize.STRING
//   }
// });
//
// Gig.sync().then(() => {
//   console.log('table created');
// });
// module.exports = Gig;