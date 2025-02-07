const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "helloworld09.sit.kmutt.ac.th",
  user: "root",
  password: "mysql@helloworldW0H4",
  database: "SIT_HELLOWORLD_G9",
});


const RoomModel = {
  getAllRooms: (callback) => {
    db.query("SELECT * FROM rooms", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
};

module.exports = RoomModel;
