const yup = require("yup");

// add phone number data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      user: yup.string().required(),
      phoneNumberValue: yup.number().required(),
      countryCode: yup.number().required(),
      isMain: yup.boolean(),
      createdBy: yup.string().required().min(6),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// update phone number data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      phoneNumberValue: yup.number(),
      countryCode: yup.number(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
