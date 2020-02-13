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
    email,
    college,
    program,
    sport,
    fullname,
  } = req.body;

 const register = new Register(id,college,program,sport,fullname, email);
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
//Login
exports.getLoginPage = (req, res, next) => {
  res.render('login/loginstud', {
    pageTitle: 'Login Page ',
    path: 'Login'
  });
};
exports.postAddStudent = (req, res, next) => 
{

  var id = req.body.id; 
  
  Register.findById(id)
  .then(([rows, fieldData]) => {
      res.render('login/login', {
        player: rows[0],
        pageTitle: 'Edit Player',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.postLoginRegister = (req, res) => {
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
      res.redirect('/homepage');
    })
    .catch(err => console.log(err));
};



//Student Page
exports.getCASHome = (req, res, next) => {
  Register.fetchAllCAS()
    .then(([rows, fieldData]) => {
      res.render('cas/cashome', {
        register: rows,
        pageTitle: 'All CAS Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};
exports.getCASBasketball = (req, res, next) => {
  Register.fetchCasBasketball()
    .then(([rows, fieldData]) => {
      res.render('cas/cas-basketball', {
        register: rows,
        pageTitle: 'CAS Basketball',
        path: 'cas'
      });
    })
    .catch(err => console.log(err));
};

exports.getCASBadminton = (req, res, next) => {
  Register.fetchCasBadminton()
    .then(([rows, fieldData]) => {
      res.render('cas/cas-badminton', {
        register: rows,
        pageTitle: 'CAS Badminton',
        path: 'cas'
      });
    })
    .catch(err => console.log(err));
};
exports.getCASVolleyball = (req, res, next) => {
  Register.fetchCasVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cas/cas-volleyball', {
        register: rows,
        pageTitle: 'CAS Volleyball',
        path: 'cas'
      });
    })
    .catch(err => console.log(err));
};
//BAB
exports.getBABHome = (req, res, next) => {
  Register.fetchBABHome()
    .then(([rows, fieldData]) => {
      res.render('cas/babhome', {
        register: rows,
        pageTitle: 'BAB',
        path: 'bab'
      });
    })
    .catch(err => console.log(err));
};
exports.getBABBasketball = (req, res, next) => {
  Register.fetchBABBasketball()
    .then(([rows, fieldData]) => {
      res.render('cas/bab-basketball', {
        register: rows,
        pageTitle: 'BAB Basketball',
        path: 'bab'
      });
    })
    .catch(err => console.log(err));
};

exports.getBABBadminton = (req, res, next) => {
  Register.fetchBABBadminton()
    .then(([rows, fieldData]) => {
      res.render('cas/bab-badminton', {
        register: rows,
        pageTitle: 'BAB Badminton',
        path: 'bab'
      });
    })
    .catch(err => console.log(err));
};
exports.getBABVolleyball = (req, res, next) => {
  Register.fetchBABVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cas/bab-volleyball', {
        register: rows,
        pageTitle: 'BAB Volleyball',
        path: 'bab'
      });
    })
    .catch(err => console.log(err));
};
//MMA
exports.getMMAHome = (req, res, next) => {
  Register.fetchMMAHome()
    .then(([rows, fieldData]) => {
      res.render('cas/mmahome', {
        register: rows,
        pageTitle: 'MMA',
        path: 'mma'
      });
    })
    .catch(err => console.log(err));
};
exports.getMMABasketball = (req, res, next) => {
  Register.fetchMMABasketball()
    .then(([rows, fieldData]) => {
      res.render('cas/mma-basketball', {
        register: rows,
        pageTitle: 'MMA Basketball',
        path: 'mma'
      });
    })
    .catch(err => console.log(err));
};

exports.getMMABadminton = (req, res, next) => {
  Register.fetchMMABadminton()
    .then(([rows, fieldData]) => {
      res.render('cas/mma-badminton', {
        register: rows,
        pageTitle: 'MMA Badminton',
        path: 'mma'
      });
    })
    .catch(err => console.log(err));
};
exports.getMMAVolleyball = (req, res, next) => {
  Register.fetchMMAVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cas/mma-volleyball', {
        register: rows,
        pageTitle: 'MMA Volleyball',
        path: 'mma'
      });
    })
    .catch(err => console.log(err));
};
//=>CCIS
exports.getCCISHome = (req, res, next) => {
  Register.fetchAllCCIS()
    .then(([rows, fieldData]) => {
      res.render('ccis/ccishome', {
        register: rows,
        pageTitle: 'CCIS',
        path: 'ccis'
      });
    })
    .catch(err => console.log(err));
};

exports.getCCISBasketball = (req, res, next) => {
  Register.fetchCcisBasketball()
    .then(([rows, fieldData]) => {
      res.render('ccis/ccis-basketball', {
        register: rows,
        pageTitle: 'CCIS Basketball',
        path: 'ccis'
      });
    })
    .catch(err => console.log(err));
};

exports.getCCISBadminton = (req, res, next) => {
  Register.fetchCcisBadminton()
    .then(([rows, fieldData]) => {
      res.render('ccis/ccis-badminton', {
        register: rows,
        pageTitle: 'CCIS Badminton',
        path: 'ccis'
      });
    })
    .catch(err => console.log(err));
};
exports.getCCISVolleyball = (req, res, next) => {
  Register.fetchCcisVolleyball()
    .then(([rows, fieldData]) => {
      res.render('ccis/ccis-volleyball', {
        register: rows,
        pageTitle: 'CCIS Volleyball',
        path: 'ccis'
      });
    })
    .catch(err => console.log(err));
};

//IT
exports.getITHome = (req, res, next) => {
  Register.fetchITHome()
    .then(([rows, fieldData]) => {
      res.render('ccis/ithome', {
        register: rows,
        pageTitle: 'IT',
        path: 'it'
      });
    })
    .catch(err => console.log(err));
};
exports.getITBasketball = (req, res, next) => {
  Register.fetchITBasketball()
    .then(([rows, fieldData]) => {
      res.render('ccis/it-basketball', {
        register: rows,
        pageTitle: 'IT Basketball',
        path: 'it'
      });
    })
    .catch(err => console.log(err));
};

exports.getITBadminton = (req, res, next) => {
  Register.fetchITBadminton()
    .then(([rows, fieldData]) => {
      res.render('ccis/it-badminton', {
        register: rows,
        pageTitle: 'IT Badminton',
        path: 'it'
      });
    })
    .catch(err => console.log(err));
};
exports.getITVolleyball = (req, res, next) => {
  Register.fetchITVolleyball()
    .then(([rows, fieldData]) => {
      res.render('ccis/it-volleyball', {
        register: rows,
        pageTitle: 'IT Volleyball',
        path: 'it'
      });
    })
    .catch(err => console.log(err));
};
//CS
exports.getCSHome = (req, res, next) => {
  Register.fetchCSHome()
    .then(([rows, fieldData]) => {
      res.render('ccis/cshome', {
        register: rows,
        pageTitle: 'CS',
        path: 'cs'
      });
    })
    .catch(err => console.log(err));
};
exports.getCSBasketball = (req, res, next) => {
  Register.fetchCSBasketball()
    .then(([rows, fieldData]) => {
      res.render('ccis/cs-basketball', {
        register: rows,
        pageTitle: 'CS Basketball',
        path: 'cs'
      });
    })
    .catch(err => console.log(err));
};

exports.getCSBadminton = (req, res, next) => {
  Register.fetchCSBadminton()
    .then(([rows, fieldData]) => {
      res.render('ccis/cs-badminton', {
        register: rows,
        pageTitle: 'CS Badminton',
        path: 'cs'
      });
    })
    .catch(err => console.log(err));
};
exports.getCSVolleyball = (req, res, next) => {
  Register.fetchCSVolleyball()
    .then(([rows, fieldData]) => {
      res.render('ccis/cs-volleyball', {
        register: rows,
        pageTitle: 'CS Volleyball',
        path: 'cs'
      });
    })
    .catch(err => console.log(err));
};
//=>CMET
exports.getCMETHome = (req, res, next) => {
  Register.fetchAllCMET()
    .then(([rows, fieldData]) => {
      res.render('cmet/cmethome', {
        register: rows,
        pageTitle: 'CMET',
        path: 'cmet'
      });
    })
    .catch(err => console.log(err));
};
exports.getCMETBasketball = (req, res, next) => {
  Register.fetchCmetBasketball()
    .then(([rows, fieldData]) => {
      res.render('cmet/cmet-basketball', {
        register: rows,
        pageTitle: 'CMET Basketball',
        path: 'cmet'
      });
    })
    .catch(err => console.log(err));
};
exports.getCMETBadminton = (req, res, next) => {
  Register.fetchCmetBadminton()
    .then(([rows, fieldData]) => {
      res.render('cmet/cmet-badminton', {
        register: rows,
        pageTitle: 'CMET Badminton',
        path: 'cmet'
      });
    })
    .catch(err => console.log(err));
};
exports.getCMETVolleyball = (req, res, next) => {
  Register.fetchCmetVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cmet/cmet-volleyball', {
        register: rows,
        pageTitle: 'CMET Volleyball',
        path: 'cmet'
      });
    })
    .catch(err => console.log(err));
//ME
};exports.getMEHome = (req, res, next) => {
  Register.fetchMEHome()
    .then(([rows, fieldData]) => {
      res.render('cmet/mehome', {
        register: rows,
        pageTitle: 'ME',
        path: 'cmet'
      });
    })
    .catch(err => console.log(err));
};
exports.getMEBasketball = (req, res, next) => {
  Register.fetchMEBasketball()
    .then(([rows, fieldData]) => {
      res.render('cmet/me-basketball', {
        register: rows,
        pageTitle: 'ME Basketball',
        path: 'me'
      });
    })
    .catch(err => console.log(err));
};

exports.getMEBadminton = (req, res, next) => {
  Register.fetchMEBadminton()
    .then(([rows, fieldData]) => {
      res.render('cmet/me-badminton', {
        register: rows,
        pageTitle: 'ME Badminton',
        path: 'me'
      });
    })
    .catch(err => console.log(err));
};
exports.getMEVolleyball = (req, res, next) => {
  Register.fetchMEVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cmet/me-volleyball', {
        register: rows,
        pageTitle: 'ME Volleyball',
        path: 'me'
      });
    })
    .catch(err => console.log(err));
//MT
};exports.getMTHome = (req, res, next) => {
  Register.fetchMTHome()
    .then(([rows, fieldData]) => {
      res.render('cmet/mthome', {
        register: rows,
        pageTitle: 'MT',
        path: 'mt'
      });
    })
    .catch(err => console.log(err));
};
exports.getMTBasketball = (req, res, next) => {
  Register.fetchMTBasketball()
    .then(([rows, fieldData]) => {
      res.render('cmet/mt-basketball', {
        register: rows,
        pageTitle: 'MT Basketball',
        path: 'mt'
      });
    })
    .catch(err => console.log(err));
};

exports.getMTBadminton = (req, res, next) => {
  Register.fetchMTBadminton()
    .then(([rows, fieldData]) => {
      res.render('cmet/mt-badminton', {
        register: rows,
        pageTitle: 'MT Badminton',
        path: 'mt'
      });
    })
    .catch(err => console.log(err));
};
exports.getMTVolleyball = (req, res, next) => {
  Register.fetchMTVolleyball()
    .then(([rows, fieldData]) => {
      res.render('cmet/mt-volleyball', {
        register: rows,
        pageTitle: 'MT Volleyball',
        path: 'mt'
      });
    })
    .catch(err => console.log(err));
};
//=>ETYCB
exports.getETYCBHome = (req, res, next) => {
  Register.fetchAllETYCB()
    .then(([rows, fieldData]) => {
      res.render('etycb/etycbhome', {
        register: rows,
        pageTitle: 'ETYCB',
        path: 'etycb'
      });
    })
    .catch(err => console.log(err));
};
exports.getETYCBBasketball = (req, res, next) => {
  Register.fetchEtycbBasketball()
    .then(([rows, fieldData]) => {
      res.render('etycb/etycb-basketball', {
        register: rows,
        pageTitle: 'ETYCB Basketball',
        path: 'etycb'
      });
    })
    .catch(err => console.log(err));
};

exports.getETYCBBadminton = (req, res, next) => {
  Register.fetchEtycbBadminton()
    .then(([rows, fieldData]) => {
      res.render('etycb/etycb-badminton', {
        register: rows,
        pageTitle: 'ETYCB Badminton',
        path: 'etycb'
      });
    })
    .catch(err => console.log(err));
};
exports.getETYCBVolleyball = (req, res, next) => {
  Register.fetchEtycbVolleyball()
    .then(([rows, fieldData]) => {
      res.render('etycb/etycb-volleyball', {
        register: rows,
        pageTitle: 'ETYCB Volleyball',
        path: 'etycb'
      });
    })
    .catch(err => console.log(err));
};

exports.getHRMHome = (req, res, next) => {
  Register.fetchHRMHome()
    .then(([rows, fieldData]) => {
      res.render('etycb/hrmhome', {
        register: rows,
        pageTitle: 'HRM',
        path: 'hrm'
      });
    })
    .catch(err => console.log(err));
};
exports.getHRMBasketball = (req, res, next) => {
  Register.fetchHRMBasketball()
    .then(([rows, fieldData]) => {
      res.render('etycb/hrm-basketball', {
        register: rows,
        pageTitle: 'HRM Basketball',
        path: 'hrm'
      });
    })
    .catch(err => console.log(err));
};

exports.getHRMBadminton = (req, res, next) => {
  Register.fetchHRMBadminton()
    .then(([rows, fieldData]) => {
      res.render('etycb/hrm-badminton', {
        register: rows,
        pageTitle: 'HRM Badminton',
        path: 'hrm'
      });
    })
    .catch(err => console.log(err));
};
exports.getHRMVolleyball = (req, res, next) => {
  Register.fetchHRMVolleyball()
    .then(([rows, fieldData]) => {
      res.render('etycb/hrm-volleyball', {
        register: rows,
        pageTitle: 'HRM Volleyball',
        path: 'hrm'
      });
    })
    .catch(err => console.log(err));
};

exports.getENTHome = (req, res, next) => {
  Register.fetchENTHome()
    .then(([rows, fieldData]) => {
      res.render('etycb/enthome', {
        register: rows,
        pageTitle: 'ENT',
        path: 'ent'
      });
    })
    .catch(err => console.log(err));
};
exports.getENTBasketball = (req, res, next) => {
  Register.fetchENTBasketball()
    .then(([rows, fieldData]) => {
      res.render('etycb/ent-basketball', {
        register: rows,
        pageTitle: 'ENT Basketball',
        path: 'ent'
      });
    })
    .catch(err => console.log(err));
};

exports.getENTBadminton = (req, res, next) => {
  Register.fetchENTBadminton()
    .then(([rows, fieldData]) => {
      res.render('etycb/ent-badminton', {
        register: rows,
        pageTitle: 'ENT Badminton',
        path: 'ent'
      });
    })
    .catch(err => console.log(err));
};
exports.getENTVolleyball = (req, res, next) => {
  Register.fetchENTVolleyball()
    .then(([rows, fieldData]) => {
      res.render('etycb/ent-volleyball', {
        register: rows,
        pageTitle: 'ENT Volleyball',
        path: 'ent'
      });
    })
    .catch(err => console.log(err));
};
//=>MITL
exports.getMITLHome = (req, res, next) => {
  Register.fetchAllMITL()
    .then(([rows, fieldData]) => {
      res.render('mitl/mitlhome', {
        register: rows,
        pageTitle: 'MITL',
        path: 'mitl'
      });
    })
    .catch(err => console.log(err));
};
exports.getMITLBasketball = (req, res, next) => {
  Register.fetchMitlBasketball()
    .then(([rows, fieldData]) => {
      res.render('mitl/mitl-basketball', {
        register: rows,
        pageTitle: 'MITL Basketball',
        path: 'mitl'
      });
    })
    .catch(err => console.log(err));
};

exports.getMITLBadminton = (req, res, next) => {
  Register.fetchMitlBadminton()
    .then(([rows, fieldData]) => {
      res.render('mitl/mitl-badminton', {
        register: rows,
        pageTitle: 'MITL Badminton',
        path: 'mitl'
      });
    })
    .catch(err => console.log(err));
};
exports.getMITLVolleyball = (req, res, next) => {
  Register.fetchMitlVolleyball()
    .then(([rows, fieldData]) => {
      res.render('mitl/mitl-volleyball', {
        register: rows,
        pageTitle: 'MITL Volleyball',
        path: 'mitl'
      });
    })
    .catch(err => console.log(err));
};
exports.getCPEHome = (req, res, next) => {
  Register.fetchCPEHome()
    .then(([rows, fieldData]) => {
      res.render('mitl/cpehome', {
        register: rows,
        pageTitle: 'CPE',
        path: 'cpe'
      });
    })
    .catch(err => console.log(err));
};
exports.getCPEBasketball = (req, res, next) => {
  Register.fetchCPEBasketball()
    .then(([rows, fieldData]) => {
      res.render('mitl/cpe-basketball', {
        register: rows,
        pageTitle: 'CPE Basketball',
        path: 'cpe'
      });
    })
    .catch(err => console.log(err));
};

exports.getCPEBadminton = (req, res, next) => {
  Register.fetchCPEBadminton()
    .then(([rows, fieldData]) => {
      res.render('mitl/cpe-badminton', {
        register: rows,
        pageTitle: 'CPE Badminton',
        path: 'cpe'
      });
    })
    .catch(err => console.log(err));
};
exports.getCPEVolleyball = (req, res, next) => {
  Register.fetchCPEVolleyball()
    .then(([rows, fieldData]) => {
      res.render('mitl/cpe-volleyball', {
        register: rows,
        pageTitle: 'CPE Volleyball',
        path: 'cpe'
      });
    })
    .catch(err => console.log(err));
};
exports.getECEHome = (req, res, next) => {
  Register.fetchECEHome()
    .then(([rows, fieldData]) => {
      res.render('mitl/ecehome', {
        register: rows,
        pageTitle: 'ECE',
        path: 'ece'
      });
    })
    .catch(err => console.log(err));
};
exports.getECEBasketball = (req, res, next) => {
  Register.fetchECEBasketball()
    .then(([rows, fieldData]) => {
      res.render('mitl/ece-basketball', {
        register: rows,
        pageTitle: 'ECE Basketball',
        path: 'ece'
      });
    })
    .catch(err => console.log(err));
};

exports.getECEBadminton = (req, res, next) => {
  Register.fetchECEBadminton()
    .then(([rows, fieldData]) => {
      res.render('mitl/ece-badminton', {
        register: rows,
        pageTitle: 'ECE Badminton',
        path: 'ece'
      });
    })
    .catch(err => console.log(err));
};
exports.getECEVolleyball = (req, res, next) => {
  Register.fetchECEVolleyball()
    .then(([rows, fieldData]) => {
      res.render('mitl/ece-volleyball', {
        register: rows,
        pageTitle: 'ECE Volleyball',
        path: 'ece'
      });
    })
    .catch(err => console.log(err));
};
//=>SHS
exports.getSHSHome = (req, res, next) => {
  Register.fetchAllSHS()
    .then(([rows, fieldData]) => {
      res.render('shs/shshome', {
        register: rows,
        pageTitle: 'SHS',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.getSHSBasketball = (req, res, next) => {
  Register.fetchShsBasketball()
    .then(([rows, fieldData]) => {
      res.render('shs/shs-basketball', {
        register: rows,
        pageTitle: 'SHS Basketball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};

exports.getSHSBadminton = (req, res, next) => {
  Register.fetchShsBadminton()
    .then(([rows, fieldData]) => {
      res.render('shs/shs-badminton', {
        register: rows,
        pageTitle: 'SHS Badminton',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getSHSVolleyball = (req, res, next) => {
  Register.fetchShsVolleyball()
    .then(([rows, fieldData]) => {
      res.render('shs/shs-volleyball', {
        register: rows,
        pageTitle: 'SHS Volleyball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getATHome = (req, res, next) => {
  Register.fetchATHome()
    .then(([rows, fieldData]) => {
      res.render('shs/athome', {
        register: rows,
        pageTitle: 'AT',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.getATBasketball = (req, res, next) => {
  Register.fetchATBasketball()
    .then(([rows, fieldData]) => {
      res.render('shs/at-basketball', {
        register: rows,
        pageTitle: 'AT Basketball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};

exports.getATBadminton = (req, res, next) => {
  Register.fetchATBadminton()
    .then(([rows, fieldData]) => {
      res.render('shs/at-badminton', {
        register: rows,
        pageTitle: 'AT Badminton',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getATVolleyball = (req, res, next) => {
  Register.fetchATVolleyball()
    .then(([rows, fieldData]) => {
      res.render('shs/at-volleyball', {
        register: rows,
        pageTitle: 'AT Volleyball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getTVLTHome = (req, res, next) => {
  Register.fetchTVLTHome()
    .then(([rows, fieldData]) => {
      res.render('shs/tvlthome', {
        register: rows,
        pageTitle: 'TVLT',
        path: ''
      });
    })
    .catch(err => console.log(err));
};

exports.getTVLTBasketball = (req, res, next) => {
  Register.fetchTVLTBasketball()
    .then(([rows, fieldData]) => {
      res.render('shs/tvlt-basketball', {
        register: rows,
        pageTitle: 'TVLT Basketball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};

exports.getTVLTBadminton = (req, res, next) => {
  Register.fetchTVLTBadminton()
    .then(([rows, fieldData]) => {
      res.render('shs/tvlt-badminton', {
        register: rows,
        pageTitle: 'SHS Badminton',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getTVLTVolleyball = (req, res, next) => {
  Register.fetchTVLTVolleyball()
    .then(([rows, fieldData]) => {
      res.render('shs/tvlt-volleyball', {
        register: rows,
        pageTitle: 'TVLT Volleyball',
        path: 'shs'
      });
    })
    .catch(err => console.log(err));
};
exports.getRegisterCAS = (req, res, next) => {
  Register.fetchAllCAS()
    .then(([rows, fieldData]) => {
      res.render('register/cas', {
        register: rows,
        pageTitle: 'All CAS Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};
exports.getRegisterCCIS = (req, res, next) => {
  Register.fetchAllCCIS()
    .then(([rows, fieldData]) => {
      res.render('register/ccis', {
        register: rows,
        pageTitle: 'All CCIS Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};exports.getRegisterCMET = (req, res, next) => {
  Register.fetchAllCMET()
    .then(([rows, fieldData]) => {
      res.render('register/cmet', {
        register: rows,
        pageTitle: 'All CMET Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};exports.getRegisterETYCB = (req, res, next) => {
  Register.fetchAllETYCB()
    .then(([rows, fieldData]) => {
      res.render('register/etycb', {
        register: rows,
        pageTitle: 'All etycb Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};exports.getRegisterMITL = (req, res, next) => {
  Register.fetchAllMITL()
    .then(([rows, fieldData]) => {
      res.render('register/mitl', {
        register: rows,
        pageTitle: 'All CAS Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};exports.getRegisterSHS = (req, res, next) => {
  Register.fetchAllSHS()
    .then(([rows, fieldData]) => {
      res.render('register/shs', {
        register: rows,
        pageTitle: 'All SHS Students',
        path: ''
      });
    })
    .catch(err => console.log(err));
};