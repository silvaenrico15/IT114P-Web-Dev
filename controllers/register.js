const Register = require('../models/register');

//HomePage
exports.getHomePage = (req, res, next) => {
  res.render('home/page', {
    pageTitle: 'Home Page ',
    path: 'home'
  });
};
