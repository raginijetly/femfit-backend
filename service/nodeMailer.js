const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_APP_MAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendMail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: "FemFit <no-reply@femfit.com>",
      to,
      subject,
      html: html,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendMail };