const catModel = require("../models/catModel");

const createCategoryController = async (req, res) => {
  const category = new catModel({
    name: req.body.name,
    description: req.body.description,
  });

  await category.save();
  res.status(201).json({ message: "Category Created " });
};

module.exports = createCategoryController;
