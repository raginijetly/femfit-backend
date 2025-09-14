const crypto = require("crypto");
const { sendMail } = require("../service/nodeMailer");
const resetPasswordTemplate = require("../templates/resetPasswordTemplate.js");

const generateUsername = ({ name, email, googleId }) => {
  const base = name?.toLowerCase()?.replace(/\s+/g, "") || email?.split("@")[0];

  const hashSource = googleId || email;
  const shortHash = crypto
    .createHash("sha256")
    .update(hashSource)
    .digest("hex")
    .slice(0, process.env.USERNAME_HASHED_DIGIT_COUNT || 6);

  return `${base}${shortHash}`;
};

// const returnError = (res, name, message, err, status = 500) => {
//   res.json({
//     status,
//     message,
//     errors: err || [],
//   });
//   if (err) {
//     console.log(name, " failed. Error is: ", err);
//     console.log("Error stack =", err.stack);
//   }
// };

// const returnResponse = (res, name, data, status = 200) => {
//   console.log(name, " returning data =", data);
//   return res.json({ status, data });
// };

const sendPasswordResetMail = async ({ userEmail, userName, resetUrl, expiryMinutes }) => {
  try {
    const html = resetPasswordTemplate
                ?.replace(/{{userName}}/g, userName || "there")
                ?.replace(/{{resetUrl}}/g, resetUrl)
                ?.replace(/{{expiryMinutes}}/g, expiryMinutes || '10')
                ?.replace(/{{currentYear}}/g, new Date().getFullYear());

    await sendMail({
      to: userEmail,
      subject: "Reset your FemFit password",
      html,
    });
  } catch (err) {
    err.scope = err.scope || "sendPasswordResetMail";
    console.error(err);
    throw err;
  }
}

module.exports = {
  generateUsername,
  sendPasswordResetMail,
  // returnError,
  // returnResponse,
};
