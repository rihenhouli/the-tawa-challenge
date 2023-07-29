const yup = require("yup");

// add article section data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      article: yup.string().required(),
      articleSectionName: yup.string().required(),
      articleSectionContent: yup.string().min(10),
      createdBy: yup.string().required(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// update article section data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      article: yup.string(),
      articleSectionName: yup.string(),
      articleSectionContent: yup.string(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json("error", { error: error.message });
  }
};
