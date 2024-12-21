const cartModel = require("../models/cartModel");
const prodModel = require("../models/prodModel");
const Joi = require("joi");

const getCartController = async (req, res) => {
  const owner = req.user.user.id;

  try {
    const cart = await cartModel.findOne({ owner });

    if (cart && cart.Item.length > 0) {
      res.status(200).send(cart);
    } else {
      res.send(null);
    }
  } catch (err) {
    res.status(500).send();
  }
};

const createCartController = async (req, res) => {
  const owner = req.user.user.id;
  const { ItemId, quantity } = req.body;

  try {
    const Cart = await cartModel.findOne({ owner });
    const Item = await prodModel.findOne({ _id: ItemId });
    if (!Item) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const name = Item.name;
    const price = Item.price;

    if (Cart) {
      const itemIndex = Cart.Item.findIndex((item) => item.ItemId == ItemId);
      if (itemIndex > -1) {
        let product = Cart.Item[itemIndex];
        product.quantity += quantity;
        Cart.bill = Cart.Item.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        Cart.Item[itemIndex] = product;
        await Cart.save();
        res.status(200).send(Cart);
      } else {
        Cart.Item.push({ ItemId, name, quantity, price });
        Cart.bill = Cart.Item.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        await Cart.save();
        res.status(200).send(Cart);
      }
    } else {
      const NewCart = await cartModel.create({
        owner,
        Item: [{ ItemId, name, quantity, price }],
        bill: quantity * price,
      });
      await NewCart.save();
      res.status(201).json({ message: "New Cart Created", cart: NewCart });
    }
  } catch (err) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

const deleteCartController = async (req, res) => {
  const itemId = req.params.ItemId;
  const owner = req.user.user.id;
  console.log(itemId);

  try {
    const cart = await cartModel.findOne({ owner });

    const itemIndex = cart.Item.findIndex((item) => item.ItemId == itemId);

    if (itemIndex > -1) {
      let item = cart.Item[itemIndex];
      cart.bill -= item.quantity * item.price;
      if (cart.bill < 0) {
        cart.bill = 0;
      }
      cart.Item.splice(itemIndex, 1);
      result = await cart.save();
      return res.status(200).send(result);
    } else {
      return res.status(404).json({ message: "Item Not Found" });
    }
  } catch {
    res.status(500).json("something Went Wrong...");
  }
};

module.exports = {
  createCartController,
  getCartController,
  deleteCartController,
};
