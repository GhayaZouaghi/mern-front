// require express
const express = require("express");

// require router
const router = express.Router();

// require model:
const Contact = require("../model/Contact");

// test
// router.get("/test", (req, res) => {
//   res.send("hiii test");
// });

/**
 * @desc: add new contact
 * @method: POST
 * @path: '/http://localhost:6000/api/contacts/'
 * @data: req.body
 */

router.post("/", async (req, res) => {
  try {
    const newContact = req.body;
    if (!newContact.name || !newContact.email) {
      return res.status(400).send({ msg: " name and email are required" });
    }

    const contactToFind = await Contact.findOne({ email: newContact.email });
    if (contactToFind) {
      return res.status(400).send({ msg: "email already exist" });
    }

    const contactToAdd = new Contact(newContact);
    await contactToAdd.save();
    res.status(200).send({ msg: "Contact added succefully", contactToAdd });
  } catch (error) {
    res.status(400).send({ msg: "Can not add new Contact", error });
  }
});

/**
 * @desc: get all contacts
 * @method: get
 * @path: '/http://localhost:6000/api/contacts/'
 * @data: no
 */
router.get("/", async (req, res) => {
  try {
    const listContact = await Contact.find();
    res.status(200).send({ msg: "This is the list of contacts", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Contacts", error });
  }
});

/**
 * @desc: delete one contact
 * @method: DELETE
 * @path: '/http://localhost:6000/api/contacts/:id'
 * @data: req.params
 */

router.delete("/:id", async (req, res) => {
  try {
    const contactId = req.params.id;
    await Contact.deleteOne({ _id: contactId });
    res.status(200).send({ msg: "This contact is deleted", contactId });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete Contact", error });
  }
});

/**
 * @desc: get one contact
 * @method: get
 * @path: '/http://localhost:6000/api/contacts/:id'
 * @data: req.params
 */
router.get("/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToFind = await Contact.findOne({ _id });
    res.status(200).send({ msg: "This contact is geted", contactToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can not find this Contact", error });
  }
});

/**
 * @desc: update contact
 * @method: PUT
 * @path: '/http://localhost:6000/api/contacts/:id'
 * @data: req.params and req.body
 */

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newContact = req.body;

    let result = await Contact.updateOne({ _id }, { $set: { ...newContact } });
    console.log(result);
    if (result.nModified === 0) {
      return res.status(400).send({ msg: "Contact already updated" });
    }
    res.status(200).send({ msg: "This contact is updated" });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Contact", error });
  }
});
module.exports = router;
