const cartModel = require("../models/cartModel");
const orderModel = require("../models/orderModel");

const createOrderContoller = async (req, res) => {
  owner = req.user.user.id;

  try {
    const cart = await cartModel.findOne({ owner });

    if (cart) {
      await orderModel.create({
        owner,
        Item: cart.Item,
        bill: cart.bill,
      });

      return res.status(201).json({ message: "Ordered Successfully" });
    } else {
      return res.status(404).json({ message: "No Cart Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

const getAllOrders = async (req, res) => {
  try {
    const order = await orderModel.find();
    if (order) {
      return res.status(200).send(order);
    }
    return res.status(404).send("No Orders Found");
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

module.exports = { createOrderContoller, getAllOrders };
