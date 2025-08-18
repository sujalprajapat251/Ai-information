var express = require("express");
const { getSubmitForm, getAllForms } = require('../controller/contactUsController');

var indexRoute = express.Router();

indexRoute.post('/getForm', getSubmitForm);
indexRoute.get('/All', getAllForms);


module.exports = indexRoute;
