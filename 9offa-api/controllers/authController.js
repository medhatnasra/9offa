const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerController = async (req, res) => {
  const schema = Joi.object({
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    lastname: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    phone: Joi.number().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    role: Joi.string().valid("client", "vendor"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  try {
    const userfind = await userModel.findOne({ email: req.body.email });
    if (userfind) {
      return res.status(400).json({ message: "User Already Registered..." });
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const user = new userModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
      role: req.body.role,
    });
    await user.save();
    return res.status(201).json({ message: "Successfully Registered .." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginController = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "incorrect Email OR Password!" });
    }

    const isPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isPassword) {
      return res.status(400).json({ message: "incorrect Email OR Password!" });
    }

    var token = jwt.sign(
      {
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          role: user.role,
        },
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" } // Token expires in 30 days
    );

    res.cookie("authcookie", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      message: "Logged Successfully ...",
      token: token,
      userdetails: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  registerController,
  loginController,
};
