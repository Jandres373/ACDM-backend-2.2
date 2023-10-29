const catchError = require("../utils/catchError");
const Users = require("../models/User");

// Get methods
const getAllUsers = catchError(async (req, res) => {
  const allUsers = await Users.findAll();
  return res.json(allUsers);
});

const getSingleUser = catchError(async (req, res) => {
  const { id } = req.params;
  const selectedUser = await Users.findAll({ where: { id } });
  return res.json(selectedUser);
});

// Post methods
const createUser = catchError(async (req, res) => {
  const newUser = await Users.create(req.body);
  return res.json(newUser);
});

// Update methods
const upadteUser = catchError(async (req, res) => {
  const { id } = req.params;
  const updatedUser = await Users.update(req.body, { where: { id } });
  return res.json(updatedUser);
});

// Delete methods
const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await Users.destroy({ where: { id } });
  return res.json(deletedUser);
});

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  upadteUser,
  deleteUser
};
