const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

// router.get('/users', async(req, res) => {

//     const allDbUsers = await User.find({ });
//     const html = `
//     <ul>
//         ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul
//     `;
//     return res.send(html)
// } )

// ROUTES -> REST APIs

router.route("/") .get(handleGetAllUsers).post(handleCreateNewUser);

// get respective user
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
