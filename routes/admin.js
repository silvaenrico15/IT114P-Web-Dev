const express = require('express');
const router = express.Router();

const playerController = require('../controllers/register');

//display
router.get('/', playerController.getRegister);
//home
router.get('/home/page', playerController.getHomePage);
//create
router.get('/register', playerController.getAddRegister);
router.post('/register', playerController.postAddRegister);
//update
router.get('/register/:id/update', playerController.getEditRegister);
router.post('/register/:id', playerController.postUpdateRegister);
//delete
router.get('/:id', playerController.deleteRegister);
exports.routes = router;
