const db = require('../util/database');


module.exports = class Register {
    constructor(id, college, program, sport, fullname, email) {
        this.id = id;
        this.college = college;
        this.program = program;
        this.sport = sport;
        this.fullname = fullname;
        this.email = email;
    }


    save()
    {
       return db.execute(
           'INSERT INTO registers (id, email) VALUES (?, ?)',
           [this.id, this.email]
         );
   }
    update() {
        return db.execute('UPDATE registers SET sport = ?, program =?, college =?, fullname = ?, email = ? WHERE id = ?',
          [this.sport, this.program, this.college, this.fullname, this.email,  this.id,]);
      }
    
    static deleteById(id) 
    {
        return db.execute('DELETE FROM registers WHERE id = ?', [id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM registers ORDER BY college');
    }
    static fetchAllCAS() {
        return db.execute('SELECT * FROM registers where college ="CAS"');
    }
    static fetchAllCCIS() {
        return db.execute('SELECT * FROM registers where college ="CCIS"');
    }
    static fetchAllCMET() {
        return db.execute('SELECT * FROM registers where college ="CMET"');
    }
    static fetchAllETYCB() {
        return db.execute('SELECT * FROM registers where college ="ETYCB"');
    }
    static fetchAllMITL() {
        return db.execute('SELECT * FROM registers where college ="MITL"');
    }
    static fetchAllSHS() {
        return db.execute('SELECT * FROM registers where college ="SHS"');
    }
  //CAS
    static fetchBABHome() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="BAB"');
    }
    static fetchMMAHome() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="MMA"');
    }
    static fetchCasBasketball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and sport ="Basketball"');
    }
    static fetchCasBadminton() {
        return db.execute('SELECT * FROM registers where college = "CAS" and sport ="Badminton"');
    }
    static fetchCasVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and sport ="Volleyball"');
    }
    static fetchBABBasketball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="BAB" and sport ="Basketball"');
    }
    static fetchBABBadminton() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="BAB" and sport ="Badminton"');
    }
    static fetchBABVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="BAB" and sport ="Volleyball"');
    }
    static fetchMMABasketball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="MMA" and sport ="Basketball"');
    }
    static fetchMMABadminton() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="MMA" and sport ="Badminton"');
    }
    static fetchMMAVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CAS" and program ="MMA" and sport ="Volleyball"');
    }
//CCIS
    static fetchCcisBasketball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and sport ="Basketball"');
    }
    static fetchCcisBadminton() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and sport ="Badminton"');
    }
    static fetchCcisVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and sport ="Volleyball"');
    }
    static fetchITHome() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="IT"');
    }
    static fetchITBasketball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="IT" and sport ="Basketball"');
    }
    static fetchITBadminton() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="IT" and sport ="Badminton"');
    }
    static fetchITVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="IT" and sport ="Volleyball"');
    }
    static fetchCSHome() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="CS"');
    }
    static fetchCSBasketball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="CS" and sport ="Basketball"');
    }
    static fetchCSBadminton() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="CS" and sport ="Badminton"');
    }
    static fetchCSVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CCIS" and program ="CS" and sport ="Volleyball"');
    }
//CMET
    static fetchCmetBasketball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and sport ="Basketball"');
    }
    static fetchCmetBadminton() {
        return db.execute('SELECT * FROM registers where college = "CMET" and sport ="Badminton"');
    }
    static fetchCmetVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and sport ="Volleyball"');
    }
    static fetchMTHome() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="MT"');
    }
    static fetchMTBasketball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="MT" and sport ="Basketball"');
    }
    static fetchMTBadminton() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="MT" and sport ="Badminton"');
    }
    static fetchMTVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="MT" and sport ="Volleyball"');
    }
    static fetchMEHome() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="ME"');
    }
    static fetchMEBasketball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="ME" and sport ="Basketball"');
    }
    static fetchMEBadminton() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="ME" and sport ="Badminton"');
    }
    static fetchMEVolleyball() {
        return db.execute('SELECT * FROM registers where college = "CMET" and program ="ME" and sport ="Volleyball"');
//ETYCB
    } 
    static fetchEtycbBasketball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and sport ="Basketball"');
    }
    static fetchEtycbBadminton() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and sport ="Badminton"');
    }
    static fetchEtycbVolleyball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and sport ="Volleyball"');
    }
    static fetchHRMHome() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="HRM"');
    }
    static fetchHRMBasketball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="HRM" and sport ="Basketball"');
    }
    static fetchHRMBadminton() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="HRM" and sport ="Badminton"');
    }
    static fetchHRMVolleyball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="HRM" and sport ="Volleyball"');
    }
    static fetchENTHome() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="ENT"');
    }
    static fetchENTBasketball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="ENT" and sport ="Basketball"');
    }
    static fetchENTBadminton() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="ENT" and sport ="Badminton"');
    }
    static fetchENTVolleyball() {
        return db.execute('SELECT * FROM registers where college = "ETYCB" and program ="ENT" and sport ="Volleyball"');
    }
//MITL
    static fetchMitlBasketball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and sport ="Basketball"');
    }
    static fetchMitlBadminton() {
        return db.execute('SELECT * FROM registers where college = "MITL" and sport ="Badminton"');
    }
    static fetchMitlVolleyball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and sport ="Volleyball"');
    }
    static fetchCPEHome() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="CPE"');
    }
    static fetchCPEBasketball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="CPE" and sport ="Basketball"');
    }
    static fetchCPEBadminton() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="CPE" and sport ="Badminton"');
    }
    static fetchCPEVolleyball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="CPE" and sport ="Volleyball"');
    }
    static fetchECEHome() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="ECE"');
    }
    static fetchECEBasketball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="ECE" and sport ="Basketball"');
    }
    static fetchECEBadminton() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="ECE" and sport ="Badminton"');
    }
    static fetchECEVolleyball() {
        return db.execute('SELECT * FROM registers where college = "MITL" and program ="ECE" and sport ="Volleyball"');
    }
//SHS
    static fetchShsHome() {
        return db.execute('SELECT * FROM registers where college = "SHS"');
    }
    static fetchShsBasketball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and sport ="Basketball"');
    }
    static fetchShsBadminton() {
        return db.execute('SELECT * FROM registers where college = "SHS" and sport ="Badminton"');
    }
    static fetchShsVolleyball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and sport ="Volleyball"');
    }
    static fetchATHome() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="AT"');
    }
    static fetchATBasketball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="AT" and sport ="Basketball"');
    }
    static fetchATBadminton() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="AT" and sport ="Badminton"');
    }
    static fetchATVolleyball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="AT" and sport ="Volleyball"');
    }
    static fetchTVLTHome() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="TVLT"');
    }
    static fetchTVLTBasketball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="TVLT" and sport ="Basketball"');
    }
    static fetchTVLTBadminton() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="TVLT" and sport ="Badminton"');
    }
    static fetchTVLTVolleyball() {
        return db.execute('SELECT * FROM registers where college = "SHS" and program ="TVLT" and sport ="Volleyball"');
    }
  
  
    static findById(id) {
        return db.execute('SELECT * FROM registers WHERE id = ?', [id]);
    }

}