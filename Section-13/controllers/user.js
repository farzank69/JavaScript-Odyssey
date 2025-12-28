const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res
      .status(400)
      .json({ status: "error", message: "No fields to update" });
  }

  try {
    const updateFields = {};
    if (body.first_name) updateFields.firstName = body.first_name;
    if (body.last_name) updateFields.lastName = body.last_name;
    if (body.email) updateFields.email = body.email;
    if (body.gender) updateFields.gender = body.gender;
    if (body.job_title) updateFields.jobTitle = body.job_title;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ status: "error", message: "user not found!" });
    }
    return res.json({ status: "success", user: updatedUser });
  } catch (error) {
    console.log("Error updating user: ", error);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to update user" });
  }
}

async function handleDeleteUserById(req, res) {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      return res
        .status(404)
        .json({ status: "error", message: "user not found" });
    }
    return res.json({
      status: "success",
      message: "user deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Failed to delete user" });
  }
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "all fields are required" });
  }
  // console.log("body", body);
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("Data", result);

  return res.status(201).json({ message: "success" });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
