// when defining route controllers always mention :
// description of route
// the route
// access

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactSchema.js");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

const postContacts = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  let contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error('contact not found');
  }
  res.status(200).json(contact);
});

const updatecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error('contact not found')
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  )
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error('contact not found')
  }

  await Contact.remove()
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  postContacts,
  getContact,
  updatecontact,
  deleteContact,
};
