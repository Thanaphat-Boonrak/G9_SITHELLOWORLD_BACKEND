const BookingModel = require("../model/bookingModel");


exports.addBooking = (req, res) => {
  const { booked_by_name, room_id, booking_by_status, booking_date, start_time, end_time } = req.body;

  if (!booked_by_name || !room_id || !booking_by_status || !booking_date || !start_time || !end_time) {
    return res.status(400).send("Invalid input");
  }

  BookingModel.addBooking({ booked_by_name, room_id, booking_by_status, booking_date, start_time, end_time }, (err, result) => {
    if (err) {
      res.status(500).send("Cannot Insert to DateBase" + err.message);
    } else {
      res.send(`Booked By : ${booked_by_name}`);
    }
  });
};


exports.getAllBooking = (req, res) => {
  BookingModel.getAllBooking((err, bookings) => {
    if (err) {
      res.status(500).send("Cannot getdata from DateBase: " + err.message);
    } else {
      res.json(bookings);
    }
  });
};

exports.deleteBooking = (req, res) => {
  const bookingId = req.params.bookingId;
  console.log(bookingId)
  BookingModel.deleteBooking(bookingId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database Error', error: err });
    }

    if (results.affectedRows > 0) {
      return res.status(200).json({ message: 'Delete Success' });
    }
    return res.status(404).json({ message: 'Delete Failed' });
  });
};


exports.getBookingByname = (req, res) => {
  const booked_by_name = req.params.booked_by_name;

  if (!booked_by_name) {
    return res.status(400).json({ error: "Name is required" });
  }

  BookingModel.getBookingByName(booked_by_name, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.json(results);
  });
};

