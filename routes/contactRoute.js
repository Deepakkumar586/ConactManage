const express = require("express");
const { getContact, createContact, getContactId, updateContact, deleteContact } = require("../contollers/contactControllers");
const { validateToken } = require("../middleware/validateToken");

const router = express.Router();

router.use(validateToken)
router.get('/',getContact)
router.post('/createContact',createContact)
router.get('/getContactID/:id',getContactId)
router.put('/updateContactID/:id',updateContact)
router.delete('/deleteContactID/:id',deleteContact)



module.exports = router