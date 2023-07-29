const yup = require("yup");

// add user data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      firstName: yup.string().required().min(3),
      lastName: yup.string().required().min(3),
      userName: yup.string().required().min(3),
      birthDate: yup.date().required(),
      userRole: yup.string().min(3),
      userState: yup.string().min(3),
      createdBy: yup.string().required().min(3),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// update user data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      firstName: yup.string().min(3),
      lastName: yup.string().min(3),
      userName: yup.string().min(3),
      userRole: yup.string().min(3),
      userState: yup.string().min(3),
      birthDate: yup.date(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json("error", { error: error.message });
  }
};
