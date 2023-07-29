const userPasswordModel = require("./user-password.model");
const mailAddressModel = require("../MailAddress/mail-address.model");
const userModel = require("../User/user.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { json } = require("express");
const bcrypt = require("bcrypt");

// list user Password

exports.listData = async (req, res, next) => {
  try {
    const list = await userPasswordModel.find();
    if (list.length > 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json("No data Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// list user Password by user

exports.listDataByUser = async (req, res, next) => {
  try {
    const list = await userPasswordModel.find({ user: req.params.user });
    if (list.length > 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json("No data Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

exports.addData = async (req, res, next) => {
  console.log(req.body)
  try {
    const { user, userPasswordValue, createdBy } = req.body;
    const saltRounds = 10;

    if (userPasswordValue && createdBy && user) {
      // Check if the password already exists for the user
      const existingPassword = await userPasswordModel.findOne({
        user,
      });

      if (!existingPassword) {
        bcrypt.hash(userPasswordValue, saltRounds, async function (err, hash) {
          if (err) {
            res.status(500).json({ error: "Error hashing the password." });
          } else {
            try {
              const password = new userPasswordModel({
                user,
                userPasswordValue: hash,
                createdBy,
              });
              await password.save();
              res.json(password._id);
            } catch (error) {
              res.status(500).json({ error: "Error saving the password." });
            }
          }
        });
      } else {
        bcrypt.compare(
          userPasswordValue,
          existingPassword.userPasswordValue,
          function (err, result) {
            if (err) {
              res.status(500).json({ error: "Error comparing passwords." });
            } else if (result) {
              res
                .status(500)
                .json({ error: "Password already exists for this user." });
            } else {
              bcrypt.hash(
                userPasswordValue,
                saltRounds,
                async function (err, hash) {
                  if (err) {
                    res
                      .status(500)
                      .json({ error: "Error hashing the password." });
                  } else {
                    try {
                      const password = new userPasswordModel({
                        user,
                        userPasswordValue: hash,
                        createdBy,
                      });
                      await password.save();
                      await userPasswordModel.updateMany(
                        { user: user, _id: { $ne: password._id } },
                        { $set: { isDeleted: true } }
                      );
                      res.json(existingPassword._id);
                    } catch (error) {
                      res
                        .status(500)
                        .json({ error: "Error adding the password." });
                    }
                  }
                }
              );
            }
          }
        );
      }
    } else {
      res.status(400).json({ error: "BAD REQUEST: Missing required data." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

// exports.resetPassword = async (req, res, next) => {
//   const { oldPassword, newPassword, userId } = req.body;
//   console.log(userId);

//   const id = new mongoose.Types.ObjectId(userId);

//   const user = await userModel.findOne({ _id: id, isDeleted: false });
//   console.log(user);

//   bcrypt.compare(oldPassword, user.password, async function (err, result) {
//     if (err) {
//       console.error(err);
//     } else if (result) {
//       const saltRounds = 10;
//       bcrypt.hash(newPassword, saltRounds, function (err, hash) {
//         if (err) {
//           res.status(500).json({ error: "error bcrypt" });
//         } else {
//           console.log("Mot de passe crypté :", hash);
//           userModel
//             .updateOne({ _id: user._id }, { $set: { password: hash } })
//             .then((result) => {
//               res.json({ id: user._id });
//             });
//         }
//       });
//     } else {
//       res.status(500).json("error");
//     }
//   });
// };

// send forgot password mail
exports.forgotPassword = async (req, res) => {
  const mailAddressValue = req.body.mailAddressValue;
  try {
    // Check if the user and mailaddress exist
    const mailAddress = await mailAddressModel.findOne({
      mailAddressValue: mailAddressValue,
      isDeleted: false,
      isMain: true
    });
    if (!mailAddress) {
      return res.status(404).json({ error: " not found" });
    }
    const userId = mailAddress.user
    const user = await userModel.findOne({
      _id: userId,
      isDeleted: false,
    });

    const secretKey = "ttc-secret-key";
    const payload = {
      userId: user._id,
      userName: user.userName,
      userRole: user.userRole,
      userMailAddress: mailAddress.mailAddressValue,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rihenHoulii@gmail.com",
        pass: "hfyxcdcdyonnvyzs",
      },
    });

    const mailOptions = {
      from: "rihenHoulii@gmail.com",
      to: mailAddress.mailAddressValue,
      subject: `TTC : Forgot Password?`,
      html: `
      <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome to THE TAWA CHALLENGE </title>
  <style>
    /* CSS styles for the email template */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f2f2f2;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
      align-content:center;
      align-items:center;
    }
    h1 {
      color: #333;
    }
    p {
      color: #555;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #007bff;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 30px;
      font-size: 18px;
      transition: background-color 0.3s ease;
      margin:15px;
      cursor:pointer;
    }
    .button:hover {
      background-color: #0056b3;
    }
    .li a[href] {
      color: #ffffff !important;
  }
  </style>
</head>
<body>
  <div class="container">
    <h1>Forgot your Password?</h1>
    <h2>Dear ${user.firstName} ${user.lastName},</h2>
    <p>Your request has been received, please click the button below to reset your password. </p>
    <a href="http://localhost:3000/reset-password/${token}" class="button" >RESET PASSWORD</a>
    <p>If you have any questions or need further assistance, please feel free to contact us.</p>
    <p>We look forward to have you among us!</p>
    <p>Best regards,</p>
    <p>Account Management Team</p>
    <p>T.T.C</p>
  </div>
</body>
</html>

        `,
    };


    // Send the email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      console.log("reset password email sent:", info.response);
      res.json({
        message: "email sent successfully",
      });
    });
  } catch (error) {
    console.error("Error emailing :", error);
    res.status(500).json({ error: "Failed to send reset password mail" });
  }
};
