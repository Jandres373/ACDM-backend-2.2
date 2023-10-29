const {
  getAllUsers,
  getSingleUser,
  createUser,
  upadteUser,
  deleteUser,
} = require("../controllers/users.controller.js");
const express = require("express");

const userRouter = express.Router();

// Read
userRouter.get("/", (req, res) => {
  res.send("Welcome to Users.api");
})
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getSingleUser);

// Create
userRouter.post("/users/", createUser);

// Update
userRouter.put("/users/:id", upadteUser);

// Delete
userRouter.delete("/users/:id", deleteUser);

module.exports = userRouter;
