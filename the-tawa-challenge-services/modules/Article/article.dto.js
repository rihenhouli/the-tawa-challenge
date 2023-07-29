const yup = require("yup");

// add article data transfer object
exports.addDto = async (req, res, next) => {
  try {
    console.log(req.body);
    const schema = yup.object().shape({
      articleTitle: yup.string().required(),
      articleCategory: yup.string(),
      createdBy: yup.string().required(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
// update article data transfer object
exports.updateDto = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      articleTitle: yup.string(),
      articleCategory: yup.string(),
      isArchived: yup.boolean(),
      isPublished: yup.boolean(),
      publishDate: yup.date(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

