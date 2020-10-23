// Upload de los achivos al s3
const fs = require("fs");
const path = require("path");
const async = require("async");
const readdir = require("recursive-readdir");

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "maill@hotmail.com",
    pass: "pasword",
  },
});
const mailOptions = {
  from: "mail@hotmail.com", // sender address
  to: "mail1@hotmail.com,mail2@hotmail.com", // list of receivers
  subject: "Test Actualizados", // Subject line
  html: `<p><a href="https://yoursurgepage.surge.sh/">Se actualizaron los tests</a></p>`, // plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
    process.exit(0);
  } else {
    console.log(info);
    process.exit(0);
  }
});
