module.exports = (app) => {
    const users = require('../controllers/users.controller.js');
    // Retrieve all users
    app.get('/users', users.findAll);
}