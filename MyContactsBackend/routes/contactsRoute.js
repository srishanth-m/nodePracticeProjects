const express = require('express')
const router = express.Router()
const {getContacts , postContacts , getContact , updatecontact , deleteContact} = require('../controllers/contactControllers')

router.route('/').get(getContacts).post(postContacts)
router.route('/:id').get(getContact).put(updatecontact).delete(deleteContact)

module.exports = router