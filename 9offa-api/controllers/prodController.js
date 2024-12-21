const Joi = require("joi");
const prodModel = require("../models/prodModel");

const createProdController = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      description: Joi.string().alphanum().min(10).max(60).required(),
      price: Joi.number().required(),
      category: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const product = new prodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      user: req.user.user.id,
      category: req.body.category,
    });

    product.save();
    res.status(201).json({ message: product });
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await prodModel.find();
    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

const getProductVendor = async (req, res) => {
  id = req.params.id;
  try {
    const products = await prodModel.find({ user: id });
    if (products) {
      return res.status(200).send(products);
    }
    res.status(404).json({ message: "Products Not Found" });
  } catch {
    res.status(500).json("Something Went Wrong");
  }
};

const deleteProdController = async (req, res) => {
  try {
    const result = await prodModel.findById({ _id: req.params.id });

    if (!result) {
      res.status(404).json({ message: "Product Not Found" });
    }
    if (result?.user == req.user.user.id) {
      await prodModel.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json({ message: "Deleted" });
    }
    res.status(400).json({ message: "An unexpected error occurred" });
  } catch (err) {
    res.status(400).json("An unexpected error occurred:", err);
  }
};

module.exports = {
  createProdController,
  getAllProducts,
  deleteProdController,
  getProductVendor,
};
