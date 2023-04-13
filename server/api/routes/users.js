import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello you are logined");
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello you are logined and you can delete your account");
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin . you are logined and you can delete all your account");
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id", verifyUser, getUser)
//GET ALL
router.get("/", verifyAdmin, getUsers)

export default router