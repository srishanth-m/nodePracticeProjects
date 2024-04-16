const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "register the user here" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

const currentUser = asyncHandler(async(req , res) =>{
    res.json({message : "current user"})
})

module.exports = { registerUser, loginUser, currentUser };