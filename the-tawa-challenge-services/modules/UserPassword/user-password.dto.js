const yup = require("yup");

// add user Password data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      user: yup.string().required(),
      userPasswordValue: yup.string().required().min(3),
      createdBy: yup.string().required().min(6),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
