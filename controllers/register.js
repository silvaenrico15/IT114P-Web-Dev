const Register = require('../models/register');

//HomePage
exports.getHomePage = (req, res, next) => {
  res.render('home/page', {
    pageTitle: 'Home Page ',
    path: 'home'
  });
};
//Register Student
exports.postAddRegister = (req, res, next) => 
{
  const
  {
    id,
    email
  } = req.body;
 const register = new Register(id, email);
  console.log(register);
  register
    .save()
    .then(() => {
      res.redirect('/register');
    })
    .catch(err => console.log(err));
};
exports.getAddRegister = (req, res, next) => {
  res.render('register/create', {
    pageTitle: 'Register',
    path: 'add-register'
  });
};
//Update Registered Student
exports.getEditRegister = (req, res) => {
  const {
    id
  } = req.params;

  Register.findById(id)
  .then(([rows, fieldData]) => {
      res.render('register/update', {
        player: rows[0],
        pageTitle: 'Edit Player',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.postUpdateRegister = (req, res) => {
  const {
    id,
    college,
    program,
    sport,
    fullname,
    email
  } = req.body;

  const register = new Register(id, college, program, sport, fullname, email);
  console.log(register);

  register
    .update()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
//Delete Registered Student
exports.deleteRegister = (req, res, next) => 
{
Register.deleteById(req.params.id)
{
  
    res.redirect('/');
  }
  
  };
//Display Registered Student
exports.getRegister = (req, res, next) => {
  Register.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('register/list', {
        register: rows,
        pageTitle: 'All Students',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};