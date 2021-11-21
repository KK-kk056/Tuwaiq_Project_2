const express = require("express");

const userRouter = express.Router();

const {
  getUser,
  getAllUser,
  updateUser,
  addNewUser,
} = require("../controllers/user");

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/user", addNewUser);
userRouter.put("/user", updateUser);

module.exports = { userRouter };
