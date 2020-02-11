const db = require('../util/database');

module.exports = class Register {
    constructor(id, email) {
        this.id = id;
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
    return db.execute('UPDATE registers SET sport = ?, college = ?, program =?, fullname = ?, email = ? WHERE id = ?',
      [this.sport, this.college, this.program, this.fullname, this.email,  this.id, ]);
  }

static deleteById(id) 
  {
      return db.execute('DELETE FROM registers WHERE id = ?', [id]);
  }
static fetchAll() {
    return db.execute('SELECT * FROM registers ORDER BY id');
}
static findById(id) {
    return db.execute('SELECT * FROM registers WHERE id = ?', [id]);
}
}