const express = require('express');
const router = express.Router();

const playerController = require('../controllers/register');

router.get('/home/page', playerController.getHomePage);

exports.routes = router;
