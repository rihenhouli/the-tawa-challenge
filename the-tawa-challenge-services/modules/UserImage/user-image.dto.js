const yup = require("yup");

// add user image data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      user: yup.string().required(),
      userImageName: yup.string(),
      userImagePath: yup.string(),
      userImageAlt: yup.string(),
      createdBy: yup.string().required().min(6),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// update user image data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      userImageAlt: yup.string(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

