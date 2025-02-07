const RoomModel = require("../model/roomModel");

exports.getAllRooms = (req, res) => {
  RoomModel.getAllRooms((err, rooms) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.json(rooms);
    }
  });
};