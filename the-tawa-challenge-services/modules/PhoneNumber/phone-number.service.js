const phoneNumberModel = require("./phone-number.model");

// list phone number

exports.listData = async (req, res, next) => {
  try {
    const list = await phoneNumberModel.find();
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

// list phone number by user

exports.listDataByUser = async (req, res, next) => {
  try {
    const list = await phoneNumberModel.find({ user: req.params.user });
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

// get phone number by _id

exports.getData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneNumber = await phoneNumberModel.findOne({
      _id: id,
      isDeleted: false,
    });
    if (phoneNumber) {
      res.status(200).json(phoneNumber);
    } else {
      res.status(404).json("phone number doesn't exist");
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// add phone number
exports.addData = async (req, res, next) => {
  try {
    const { phoneNumberValue, countryCode, user, createdBy } = req.body;
    if (
      phoneNumberValue !== undefined ||
      user !== undefined ||
      createdBy !== undefined
    ) {
      const phoneNumber = await phoneNumberModel.findOne({
        phoneNumberValue: phoneNumberValue,
        countryCode: countryCode,
        isDeleted: false,
      });
      const mains = await phoneNumberModel.find({
        isDeleted: false,
        user: user,
        isMain: true,
      });
      console.log(phoneNumber);

      if (!phoneNumber) {
        let isMain = req.body.isMain === true ? true : false;
        if (mains.length===0){isMain=true}
        const newphoneNumber = new phoneNumberModel({
          ...req.body,
          isMain: isMain,
        });
        newphoneNumber.save();
        if (isMain === true) {
          await phoneNumberModel.updateMany(
            { user: req.body.user, _id: { $ne: newphoneNumber._id } },
            { $set: { isMain: false } }
          );
        }
        res.json(newphoneNumber._id);
      } else {
        res.status(500).json({ error: "phone number already exists" });
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

// update phone number

exports.updateData = async function (req, res, next) {
  try {
    const { id } = req.params;
    const dbphoneNumber = await phoneNumberModel.findById({ _id: id });
    if (dbphoneNumber) {
      // phoneNumberValue
      let phoneNumberValue = req.body.phoneNumberValue;
      if (req.body.phoneNumberValue === undefined) {
        phoneNumberValue = dbphoneNumber.phoneNumberValue;
      }
      // countryCode
      let countryCode = req.body.countryCode;
      if (req.body.countryCode === undefined) {
        countryCode = dbphoneNumber.countryCode;
      }
      if (
        req.body.phoneNumberValue !== undefined ||
        req.body.countryCode !== undefined
      ) {
        if (
          (req.body.phoneNumberValue !== dbphoneNumber.phoneNumberValue &&
            req.body.phoneNumberValue !== undefined) ||
          (req.body.countryCode !== dbphoneNumber.countryCode &&
            req.body.countryCode !== undefined)
        ) {
          const phoneNumber = await phoneNumberModel.findOne({
            phoneNumberValue: req.body.phoneNumberValue,
            countryCode: req.body.countryCode,
            _id: { $ne: id },
          });
          if (!phoneNumber) {
            const updatedphoneNumber = { ...req.body };
            const phoneNumber = await phoneNumberModel.findByIdAndUpdate(id, {
              $set: updatedphoneNumber,
            });
            if (!phoneNumber) {
              res
                .status(500)
                .json({ error: "Error while updating phone number" });
            } else {
              res.json(await phoneNumberModel.findById({ _id: id }));
            }
          } else {
            res
              .status(409)
              .json({ error: "CONFLICT : phone number already exists" });
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
      res.status(404).json({ error: "NOT FOUND : phone number doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete phone number

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneNumber = await phoneNumberModel.findOne({
      isDeleted: false,
      _id: id,
    });
    if (phoneNumber) {
      const deletedphoneNumber = await phoneNumberModel.findByIdAndUpdate(id, {
        $set: { isDeleted: true, isMain: false },
      });
      if (deletedphoneNumber) {
        res.status(200).json("phone number deleted successfully");
      } else {
        res.json({ error: "Error while deleting the phone number" });
      }
    } else {
      res.status(404).json({ error: "phone number doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};

// restore user

exports.restoreData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneNumber = await phoneNumberModel.findOne({
      isDeleted: true,
      _id: id,
    });
    if (phoneNumber) {
      const restoredphoneNumber = await phoneNumberModel.findByIdAndUpdate(id, {
        $set: { isDeleted: false },
      });
      if (restoredphoneNumber) {
        res.status(200).json("phone number restored successfully");
      } else {
        res.json({ error: "Error while restoring the phone number" });
      }
    } else {
      res.status(404).json({ error: "phone number doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error responding to your request" });
  }
};
