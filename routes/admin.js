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
//login
router.post('/login', playerController.postAddStudent);
router.post('/login/:id', playerController.postLoginRegister);
router.get('/login', playerController.getLoginPage);
//delete
router.get('/:id', playerController.deleteRegister);

//CAS
router.get('/cas/home', playerController.getCASHome);
router.get('/cas/basketball', playerController.getCASBasketball);
router.get('/cas/badminton', playerController.getCASBadminton);
router.get('/cas/volleyball', playerController.getCASVolleyball);
router.get('/cas/BAB', playerController.getBABHome);
router.get('/cas/BAB/basketball', playerController.getBABBasketball);
router.get('/cas/BAB/badminton', playerController.getBABBadminton);
router.get('/cas/BAB/volleyball', playerController.getBABVolleyball);
router.get('/cas/MMA', playerController.getMMAHome);
router.get('/cas/MMA/basketball', playerController.getMMABasketball);
router.get('/cas/MMA/badminton', playerController.getMMABadminton);
router.get('/cas/MMA/volleyball', playerController.getMMAVolleyball);
//CCIS
router.get('/ccis/home', playerController.getCCISHome);
router.get('/ccis/basketball', playerController.getCCISBasketball);
router.get('/ccis/badminton', playerController.getCCISBadminton);
router.get('/ccis/volleyball', playerController.getCCISVolleyball);
router.get('/ccis/IT', playerController.getITHome);
router.get('/ccis/IT/basketball', playerController.getITBasketball);
router.get('/ccis/IT/badminton', playerController.getITBadminton);
router.get('/ccis/IT/volleyball', playerController.getITVolleyball);
router.get('/ccis/CS', playerController.getCSHome);
router.get('/ccis/CS/basketball', playerController.getCSBasketball);
router.get('/ccis/CS/badminton', playerController.getCSBadminton);
router.get('/ccis/CS/volleyball', playerController.getCSVolleyball);
//CMET
router.get('/cmet/home', playerController.getCMETHome);
router.get('/cmet/basketball', playerController.getCMETBasketball);
router.get('/cmet/badminton', playerController.getCMETBadminton);
router.get('/cmet/volleyball', playerController.getCMETVolleyball);
router.get('/cmet/ME', playerController.getMEHome);
router.get('/cmet/ME/basketball', playerController.getMEBasketball);
router.get('/cmet/ME/badminton', playerController.getMEBadminton);
router.get('/cmet/ME/volleyball', playerController.getMEVolleyball);
router.get('/cmet/MT', playerController.getMTHome);
router.get('/cmet/MT/basketball', playerController.getMTBasketball);
router.get('/cmet/MT/badminton', playerController.getMTBadminton);
router.get('/cmet/MT/volleyball', playerController.getMTVolleyball);
//ETYCB
router.get('/etycb/home', playerController.getETYCBHome);
router.get('/etycb/basketball', playerController.getETYCBBasketball);
router.get('/etycb/badminton', playerController.getETYCBBadminton);
router.get('/etycb/volleyball', playerController.getETYCBVolleyball);
router.get('/etycb/HRM', playerController.getHRMHome);
router.get('/etycb/HRM/basketball', playerController.getHRMBasketball);
router.get('/etycb/HRM/badminton', playerController.getHRMBadminton);
router.get('/etycb/HRM/volleyball', playerController.getHRMVolleyball);
router.get('/etycb/ENT', playerController.getENTHome);
router.get('/etycb/ENT/basketball', playerController.getENTBasketball);
router.get('/etycb/ENT/badminton', playerController.getENTBadminton);
router.get('/etycb/ENT/volleyball', playerController.getENTVolleyball);
//MITL
router.get('/mitl/home', playerController.getMITLHome);
router.get('/mitl/basketball', playerController.getMITLBasketball);
router.get('/mitl/badminton', playerController.getMITLBadminton);
router.get('/mitl/volleyball', playerController.getMITLVolleyball);
router.get('/mitl/CPE', playerController.getCPEHome);
router.get('/mitl/CPE/basketball', playerController.getCPEBasketball);
router.get('/mitl/CPE/badminton', playerController.getCPEBadminton);
router.get('/mitl/CPE/volleyball', playerController.getCPEVolleyball);
router.get('/mitl/ECE', playerController.getECEHome);
router.get('/mitl/ECE/basketball', playerController.getECEBasketball);
router.get('/mitl/ECE/badminton', playerController.getECEBadminton);
router.get('/mitl/ECE/volleyball', playerController.getECEVolleyball);
//SHS
router.get('/shs/home', playerController.getSHSHome);
router.get('/shs/basketball', playerController.getSHSBasketball);
router.get('/shs/badminton', playerController.getSHSBadminton);
router.get('/shs/volleyball', playerController.getSHSVolleyball);
router.get('/shs/AT', playerController.getATHome);
router.get('/shs/AT/basketball', playerController.getATBasketball);
router.get('/shs/AT/badminton', playerController.getATBadminton);
router.get('/shs/AT/volleyball', playerController.getATVolleyball);
router.get('/shs/TVLT', playerController.getTVLTHome);
router.get('/shs/TVLT/basketball', playerController.getTVLTBasketball);
router.get('/shs/TVLT/badminton', playerController.getTVLTBadminton);
router.get('/shs/TVLT/volleyball', playerController.getTVLTVolleyball);


exports.routes = router;
