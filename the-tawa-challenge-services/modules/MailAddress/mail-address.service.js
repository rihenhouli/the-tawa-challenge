const mailAddressModel = require("./mail-address.model");

// list mail address

exports.listData = async (req, res, next) => {
  try {
    const list = await mailAddressModel.find();
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

// list mail address by user

exports.listDataByUser = async (req, res, next) => {
  try {
    const list = await mailAddressModel.find({ user: req.params.user });
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

// get mail address by _id

exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mailAddress = await mailAddressModel.findOne({
      _id: id,
      isDeleted: false,
    });
    if (mailAddress) {
      res.status(200).json(mailAddress);
    } else {
      res.status(404).json("mailAddress doesn't exist");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// list mail address by user

exports.getDataByValue = async (req, res, next) => {
  try {
    const { mailAddressValue } = req.params;
    const list = await mailAddressModel.findOne({
      mailAddressValue: mailAddressValue,
    });
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

// add mail address
exports.addData = async (req, res, next) => {
  try {
    const { mailAddressValue, user, createdBy } = req.body;
    if (
      mailAddressValue !== undefined ||
      user !== undefined ||
      createdBy !== undefined
    ) {
      const mailAddress = await mailAddressModel.findOne({
        mailAddressValue: mailAddressValue,
        isDeleted: false,
      });
      const mains = await mailAddressModel.find({
        isDeleted: false,
        user: user,
        isMain: true,
      });
      console.log(mailAddress);

      if (!mailAddress) {
        let isMain = req.body.isMain === true ? true : false;
        if (mains.length === 0) {
          isMain = true;
        }
        const newMailAddress = new mailAddressModel({
          ...req.body,
          isMain: isMain,
        });
        newMailAddress.save();
        if (isMain === true) {
          await mailAddressModel.updateMany(
            { user: req.body.user, _id: { $ne: newMailAddress._id } },
            { $set: { isMain: false } }
          );
        }
        res.json(newMailAddress._id);
      } else {
        res.status(500).json({ error: "MailAddress already exists" });
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

// update mail address

exports.updateData = async function (req, res, next) {
  try {
    const { id } = req.params;
    const dbmailAddress = await mailAddressModel.findById({ _id: id });
    if (dbmailAddress) {
      // mailAddressValue
      let mailAddressValue = req.body.mailAddressValue;
      if (req.body.mailAddressValue === undefined) {
        mailAddressValue = dbmailAddress.mailAddressValue;
      }
      if (req.body.mailAddressValue !== undefined) {
        if (
          req.body.mailAddressValue !== dbmailAddress.mailAddressValue &&
          req.body.mailAddressValue !== undefined
        ) {
          const mailAddress = await mailAddressModel.findOne({
            mailAddressValue: req.body.mailAddressValue,
            _id: { $ne: id },
          });
          if (!mailAddress) {
            const updatedmailAddress = { ...req.body };
            const mailAddress = await mailAddressModel.findByIdAndUpdate(id, {
              $set: updatedmailAddress,
            });
            if (!mailAddress) {
              res
                .status(500)
                .json({ error: "Error while updating mail Address" });
            } else {
              res.json(await mailAddressModel.findById({ _id: id }));
            }
          } else {
            res
              .status(409)
              .json({ error: "CONFLICT : mail Address already exists" });
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
      res.status(404).json({ error: "NOT FOUND : mail Address doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete mail address

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mailAddress = await mailAddressModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (mailAddress) {
      const deletedmailAddress = await mailAddressModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true, isMain: false },
      });
      if (deletedmailAddress) {
        res.status(200).json("mail address deleted successfully");
      } else {
        res.json({ error: "Error while deleting the mail address" });
      }
    } else {
      res.status(404).json({ error: "mail address doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore mail address

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mailAddress = await mailAddressModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (mailAddress) {
      const restoredMailAddress = await mailAddressModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (restoredMailAddress) {
        res.status(200).json("Mail Address restored successfully");
      } else {
        res.json({ error: "Error while restoring the Mail Address" });
      }
    } else {
      res.status(404).json({ error: "Mail Address doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// decline mail

exports.declineMailAddress = async (req, res, next) => {
  try {
    const { email } = req.params;
    const mailAddress = await mailAddressModel.findOne({
      mailAddressValue: email,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rihenHoulii@gmail.com",
        pass: "hfyxcdcdyonnvyzs",
      },
    });

    if (mailAddress) {
      const mailOptions = {
        from: "rihenHoulii@gmail.com",
        to: mailAddress.mailAddressValue,
        subject: `TTC : WRONGFUL MAIL ADDRESS`,
        html: `
        <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>wrongful mail address </title>
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
      <h1>WRONGFUL EMAIL</h1>
      <p>Your Reclaim has been received Successfully. </p>
      <p> Thank you for letting us know! </p>
      <p>If you have any questions or need further assistance, please feel free to contact us.</p>
      <p>Best regards,</p>
      <p>Account Management Team</p>
      <p>T.T.C</p>
    </div>
  </body>
  </html>
          `,
      };
      const declinedMailAddress = await mailAddressModel.findByIdAndUpdate(
        mailAddress._id,
        {
          $set: { isDeleted: true },
        }
      );
      if (declinedMailAddress) {
        res.status(200).json("Mail Address declined successfully");
      } else {
        res.json({ error: "Error while declining the Mail Address" });
      }
    } else {
      res.status(404).json({ error: "Mail Address doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
