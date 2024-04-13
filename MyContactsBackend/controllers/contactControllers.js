// when defining route controllers always mention :
// description of route
// the route
// access

const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).send("HEllo");
});

const postContacts = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, numbero, email } = req.body;
  console.log(name, numbero, email);
  if (!name || !numbero || !email) {
    res.status(400);
    throw new Error("name number and email should be compulasrily entered");
  }
  res.status(200).send("post contact");
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).send("get id'd contact");
});

const updatecontact = asyncHandler(async (req, res) => {
  res.status(200).send("update id'd contact");
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send("delete id'd contact");
});

module.exports = {
  getContacts,
  postContacts,
  getContact,
  updatecontact,
  deleteContact,
};
