const express = require("express");

const userRouter = express.Router();
const {users} =require('../data')
const {
  getUser,
  getAllUser,
  updateUser,
  addNewUser,
  getInformation,
} = require("../controllers/user");

userRouter.get("/", getAllUser);
userRouter.post("/login", getUser);
userRouter.post("/", addNewUser);
userRouter.post("/usersinfo", getInformation);
userRouter.put("/user", updateUser);

module.exports = { userRouter };
