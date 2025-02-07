const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController.js");
const bookingController = require("../controller/BookingController.js");

/**
 * @swagger
 * /rooms:
 *   get:
 *     description: Fetch a list of all rooms
 *     responses:
 *       200:
 *         description: A list of rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   room_id:
 *                     type: integer
 *                     example: 1
 *                   building_name:
 *                     type: string
 *                     example: "CB2"
 *                   room_name:
 *                     type: string
 *                     example: "2301"
 */
router.get("/rooms", roomController.getAllRooms);

/**
 * @swagger
 * /booking:
 *   post:
 *     description: Add a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               booked_by_name:
 *                 type: string
 *                 example: "test"
 *               room_id:
 *                 type: integer
 *                 example: 1
 *               booking_by_status:
 *                 type: string
 *                 example: "student"
 *               booking_date:
 *                 type: string
 *                 format: date-time
 *               start_time:
 *                 type: string
 *                 format: date-time
 *               end_time:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Booking By:book_by-name
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/booking", bookingController.addBooking);
/**
 * @swagger
 * /AllBooking:
 *   get:
 *     description: Fetch all bookings
 *     responses:
 *       200:
 *         description: A list of all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   booked_by_name:
 *                     type: string
 *                     example: Thanaphat Boonrak
 *                   booking_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-04T17:00:00.000Z"
 *                   booking_by_status:
 *                     type: string
 *                     example: Student
 *                   start_time:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-05T02:00:00.000Z"
 *                   end_time:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-05T04:00:00.000Z"
 *                   room_name:
 *                     type: string
 *                     example: "2301"
 */

router.get("/AllBooking", bookingController.getAllBooking);

/**
 * @swagger
 * /GetBookingByName/{booked_by_name}: 
 *   get:
 *     description: Fetch a booking by the name of the person who booked
 *     parameters:
 *       - in: path
 *         name: booked_by_name
 *         required: true
 *         schema:
 *           type: string
 *           example: "Thanaphat Boonrak"  # ตัวอย่างค่าที่จะส่งใน URL
 *     responses:
 *       200:
 *         description: Booking found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 booked_by_name:
 *                   type: string
 *                   example: "Thanaphat Boonrak"
 *                 room_id:
 *                   type: integer
 *                   example: 1
 *                 booking_by_status:
 *                   type: string
 *                   example: "Student"
 *                 booking_date:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-04T17:00:00.000Z"
 *                 start_time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-05T02:00:00.000Z"
 *                 end_time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-05T04:00:00.000Z"
 *       404:
 *         description: No bookings found
 */

router.get('/GetBookingByName/:booked_by_name', bookingController.getBookingByname);

module.exports = router;
