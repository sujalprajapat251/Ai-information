const contactUs = require("../model/contactUs")

// @POST Submit Form
const getSubmitForm = async (req, res) => {
//   try {
//     const newForm = new Form(req.body);
//     console.log(newForm);
    
//     const savedForm = await newForm.save();
//     res.status(201).json({ success: true, data: savedForm });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }

  try {
    const { companySize, companyName, firstName, lastName, workEmail, phoneNumber,businessNeeds  } = req.body;
    
    const contact = new contactUs({
        companySize,
        companyName,
        firstName,
        lastName,
        workEmail,
        phoneNumber,
        businessNeeds
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
const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json({ success: true, data: forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
    getSubmitForm,
    getAllForms,
}
