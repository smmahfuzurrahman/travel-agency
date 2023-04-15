import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
// import { createError } from "../utils/error.js";
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            });
        } catch (err) {
            next();
        }
        res.status(200).json(savedRoom);

    } catch (err) {
        next();
    }
}
export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // This code use purpose postman Not effective In database
        );
        res.status(200).json(updateRoom)
    } catch (err) {
        next(err)
    }
}
export const deleteRoom = async (req, res, next) => {
    try {
        const hotelId = req.params.hotelid;
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            });
        } catch (err) {
            next();
        }
        await Room.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Delete")
    } catch (err) {
        next(err)
    }
}
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(
            req.params.id
        );
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}
export const getRooms = async (req, res, next) => {
    try {
        const Rooms = await Hotel.find();
        res.status(200).json(Rooms)
    } catch (err) {
        next(err);
    }
}