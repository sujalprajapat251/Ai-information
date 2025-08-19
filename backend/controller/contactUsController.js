const contactUs = require("../model/contactUs")

// @POST Submit Form
const addContactUs = async (req, res) => {
  try {
    const {firstName, lastName, workEmail, phoneNumber,description} = req.body;
    const contact = new contactUs({
        firstName,
        lastName,
        workEmail,
        phoneNumber,
        description,
        date: new Date()
    })
    const savedContactUs = await contact.save()
    res.status(201).json({
        success: true,
        message: "Contact created successfully",
        data: savedContactUs
    })
} catch (error) {
    res.stutus(400).json({
        success: false,
        message: "Error creating Contact",
        error: error.message
    })
}
};
// @GET All Forms (for testing/admin)
const getContactUs = async (req, res) => {
  try {
    const contacts = await contactUs.find();
    res.render("contacts", { title: "All Contacts", contacts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {
  addContactUs,
  getContactUs
};
