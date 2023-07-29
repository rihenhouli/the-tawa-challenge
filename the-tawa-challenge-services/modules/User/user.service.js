const { ObjectId } = require("mongodb");
const userModel = require("./user.model");
const mailAddressModel = require("../MailAddress/mail-address.model");
const userPasswordModel = require("../UserPassword/user-password.model");
const PDFDocument = require("pdfkit");
const QRCode = require("qrcode");

//const userPasswordModel = require("./user-password.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { json } = require("express");

// list users

exports.listData = async (req, res, next) => {
  try {
    const list = await userModel.find();
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

// get User by _id

exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await userModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("User doesn't exist Found");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// add User
exports.addData = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, createdBy, birthDate } = req.body;
    if (
      firstName !== undefined ||
      lastName !== undefined ||
      userName !== undefined ||
      birthDate !== undefined ||
      createdBy !== undefined
    ) {
      const existingUser = await userModel.findOne({
        userName: userName,
        isDeleted: false,
      });
      console.log(existingUser);

      if (!existingUser) {
        const user = new userModel({ ...req.body });
        user.save();
        res.json(user._id);
      } else {
        res.status(500).json({ error: "User already exists" });
      }
    } else {
      res
        .status(400)
        .json({ error: "BAD REQUEST : No Data has been inserted " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// send confirmation mail
exports.sendAccountConfirmationMail = async (req, res) => {
  const userId = req.body.user;
  try {
    // Check if the user and mailaddress exist
    const user = await userModel.findById(userId);
    const mailAddress = await mailAddressModel.findOne({
      user: userId,
      isDeleted: false,
    });

    if (!user || !mailAddress) {
      return res.status(404).json({ error: " not found" });
    }

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
      subject: `TTC : WELCOME AMONG US`,
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
    <h1>Welcome to THE TAWA CHALLENGE</h1>
    <h2>Dear ${user.firstName} ${user.lastName},</h2>
    <p>Your account has been created successfully. </p>
    <a href="http://localhost:3000" class="button" >LOG IN</a>
    <p>  Didn't sign up for T.T.C ? 
      <a href="http://localhost:3030/mail-address/decline/${mailAddress.mailAddressValue}"> 
         Let us know. 
      </a>
    </p>
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
      console.log("confirmation email sent:", info.response);
      res.json({
        message: "email sent successfully",
      });
    });
  } catch (error) {
    console.error("Error emailing :", error);
    res.status(500).json({ error: "Failed to send confirmation mail" });
  }
};

// update user

exports.updateData = async function (req, res, next) {
  try {
    const { id } = req.params;
    const dbuser = await userModel.findById({ _id: id });
    if (dbuser) {
      // userName
      let userName = req.body.userName;
      if (req.body.userName === undefined) {
        userName = dbuser.userName;
      }
      // firstName
      let firstName = req.body.firstName;
      if (req.body.firstName === undefined) {
        firstName = dbuser.firstName;
      }
      // lastName
      let lastName = req.body.lastName;
      if (req.body.lastName === undefined) {
        lastName = dbuser.lastName;
      }
      // userRole
      let userRole = req.body.userRole;
      if (req.body.userRole === undefined) {
        userRole = dbuser.userRole;
      }
      // userState
      let userState = req.body.userState;
      if (req.body.userState === undefined) {
        userState = dbuser.userState;
      }

      // birthDate
      let birthDate = req.body.birthDate;
      if (req.body.birthDate === undefined) {
        birthDate = dbuser.birthDate;
      }
      if (
        req.body.userName !== undefined ||
        req.body.lastName !== undefined ||
        req.body.firstName !== undefined ||
        req.body.birthDate !== undefined ||
        req.body.userRole !== undefined ||
        req.body.userState !== undefined
      ) {
        if (
          (req.body.userName !== dbuser.userName &&
            req.body.userName !== undefined) ||
          (req.body.firstName !== dbuser.firstName &&
            req.body.firstName !== undefined) ||
          (req.body.lastName !== dbuser.lastName &&
            req.body.lastName !== undefined) ||
          (req.body.userRole !== dbuser.userRole &&
            req.body.userRole !== undefined) ||
          (req.body.userState !== dbuser.userState &&
            req.body.userState !== undefined) ||
          (req.body.birthDate !== dbuser.birthDate &&
            req.body.birthDate !== undefined)
        ) {
          const existinguser = await userModel.findOne({
            userName: req.body.userName,
            _id: { $ne: id },
          });
          if (!existinguser) {
            const updateduser = { ...req.body };
            const user = await userModel.findByIdAndUpdate(id, {
              $set: updateduser,
            });
            if (!user) {
              res.status(500).json({ error: "Error while updating user" });
            } else {
              res.json(await userModel.findById({ _id: id }));
            }
          } else {
            res.status(409).json({ error: "CONFLICT : user already exists" });
          }
        } else {
          res
            .status(400)
            .json({ error: "BAD REQUEST : No changes have been made" });
        }
      } else {
        res
          .status(400)
          .json({ error: "BAD REQUEST : No Data has been inserted " });
      }
    } else {
      res.status(404).json({ error: "NOT FOUND : user doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete user

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingUser = await userModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (existingUser) {
      const User = await userModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true },
      });
      if (User) {
        res.status(200).json("user deleted successfully");
      } else {
        res.json({ error: "Error while deleting the user" });
      }
    } else {
      res.status(404).json({ error: "user doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore user

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingUser = await userModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (existingUser) {
      const User = await userModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (User) {
        res.status(200).json("user restored successfully");
      } else {
        res.json({ error: "Error while restoring the user" });
      }
    } else {
      res.status(404).json({ error: "user doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// authenticate
exports.authenticate = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    let theLogin = "";
    let userId = "";
    const theUser = await userModel.findOne({
      userName: login,
      isDeleted: false,
    });
    const theEmail = await mailAddressModel.findOne({
      mailAddressValue: login,
      isDeleted: false,
    });
    if (theUser) {
      theLogin = theUser.userName;
      userId = theUser._id;
    } else if (theEmail) {
      theLogin = theEmail.mailAddressValue;
      userId = theEmail.user;
    }
    console.log(userId);
    if (userId != "") {
      const passwordDb = await userPasswordModel.findOne({
        user: userId,
        isDeleted: false,
      });
      console.log(passwordDb);
      bcrypt.compare(
        password,
        passwordDb.userPasswordValue,
        async function (err, result) {
          if (err) {
            console.error(err);
          } else if (result) {
            const userConnecting = await userModel.findById(userId);
            if (userConnecting.userState !== "blocked") {
              const userMail = await mailAddressModel.findOne({
                user: userConnecting._id,
                isDeleted: false,
              });
              const secretKey = "ttc-secret-key";
              const payload = {
                userId: userConnecting._id,
                userName: userConnecting.userName,
                userRole: userConnecting.userRole,
                userMailAddress: userMail.mailAddressValue,
              };
              const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });
              await userModel.findByIdAndUpdate(userConnecting._id, {
                $set: { userState: "active" },
              });
              res.json({ ...payload, access_token: token });
            } else {
              res.json("your account has been blocked");
            }
          } else {
            console.log("wrong authentication credentials");
          }
        }
      );
    } else {
      res.json("wrong login credentials");
    }
  } catch (error) {
    res.json(error);
  }
};

// disconnect
exports.signOut = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userId } = req.body.userId;
    const existingUser = await userModel.findById(userId);
    if (existingUser) {
      const User = await userModel.findByIdAndUpdate(id, {
        $set: { userState: "disconnected" },
      });
      if (User) {
        res.status(200).json("user disconnected successfully");
      } else {
        res.json({ error: "Error while disconnecting the user" });
      }
    } else {
      res.status(404).json({ error: "user doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
