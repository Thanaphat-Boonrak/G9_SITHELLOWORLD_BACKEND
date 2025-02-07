const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "helloworld09.sit.kmutt.ac.th",
  user: "root",
  password: "mysql@helloworldW0H4",
  database: "SIT_HELLOWORLD_G9",
});

const BookingModel = {
  addBooking: (bookingData, callback) => {
    const {
      booked_by_name,
      room_id,
      booking_by_status,
      booking_date,
      start_time,
      end_time,
    } = bookingData;

    const sql = `
      INSERT INTO bookings (booked_by_name, room_id, booking_by_status, booking_date, start_time, end_time)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        booked_by_name,
        room_id,
        booking_by_status,
        booking_date,
        start_time,
        end_time,
      ],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      }
    );
  },

  getAllBooking: (callback) => {
    const sql = `SELECT  b.booked_by_name,booking_date,booking_by_status,b.start_time,b.end_time, r.room_name FROM bookings b INNER JOIN rooms r ON b.room_id = r.room_id`;
    db.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },


  deleteBooking: (bookingId, callback) => {
    const sql = `DELETE FROM bookings WHERE booking_id = ?`;
    db.query(sql, [bookingId], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },





  getBookingByName: (booked_by_name, callback) => {
    const sql = `SELECT  b.booked_by_name,booking_date,booking_by_status,b.start_time,b.end_time, r.room_name FROM bookings b INNER JOIN rooms r ON b.room_id = r.room_id  WHERE b.booked_by_name = ?`
    db.query(sql, [booked_by_name], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

};

module.exports = BookingModel;
