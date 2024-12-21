const userModel = require("../models/userModel");

const GetAllUsers = async (req, res) => {
  const allusers = await userModel.find();

  return res.status(200).send(allusers);
};

const DeleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const searchuser = await userModel.findOne({ _id: id });

    if (searchuser) {
      const deleteduser = await userModel.findByIdAndDelete({ _id: id });

      return res.status(200).json({ message: "Deleted Successfully .." });
    }

    return res.status(404).json({ message: "User Not Found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = { GetAllUsers, DeleteUser };
