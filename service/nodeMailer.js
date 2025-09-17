const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_APP_MAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  connectionTimeout: 20 * 1000, // 20 secs
});

const sendMail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"FemFit" <${process.env.GMAIL_APP_MAIL}>`,
      to,
      subject,
      html: html,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendMail };
