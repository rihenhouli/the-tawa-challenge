const yup = require("yup");

// add article like data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      user: yup.string().required(),
      article: yup.string().required(),
      createdBy: yup.string().required().min(6),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

