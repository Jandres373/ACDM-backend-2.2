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
userRouter.get("/api/users", getAllUsers);
userRouter.get("/api/users/:id", getSingleUser);

// Create
userRouter.post("/api/users/", createUser);

// Update
userRouter.put("/api/users/:id", upadteUser);

// Delete
userRouter.delete("/api/users/:id", deleteUser);

module.exports = userRouter;
