const yup = require("yup");

// add mail address data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      user: yup.string().required(),
      mailAddressValue: yup.string().required(),
      createdBy: yup.string().required().min(6),
      isMain: yup.boolean(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// update mail address data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      mailAddressValue: yup.string().required(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
