const product = require("../Models/productModel");

module.exports = {
  getAllProduct: (req, res) => {
    product.getproductList().then((result) => res.status(200).send(result));
  },
  getProduct: (req, res) => {
    const id = req.params.id;
    product.getproduct(id).then((result) => res.status(200).send(result));
  },
  addproduct: (req, res) => {
    console.log("req.body", req.body);
    var { name, type, price } = req.body;

    var addproduct = product.addProduct(name, type, price);
    if (addproduct) {
      res
        .status(200)
        .json({
          status: 200,
          success: "true",
          message: "ສຳເລັດ",
        });
    } else {
      res
        .json({ status: 405, success: "false", message: "ບໍ່ສຳເລັດ" })
        .status(405);
    }
  },
  updateproduct: (req, res) => {
    console.log("req.body", req.body);
    var { name, type, price, id } = req.body;

    var update = product.updateProduct(name, type, price, id);
    if (update) {
      res
        .status(200)
        .json({
          status: 200,
          success: "true",
          message: "ສຳເລັດ",
          data: req.body
        });
    } else {
      res
        .json({ status: 405, success: "false", message: "ບໍ່ສຳເລັດ" })
        .status(405);
    }
  },
  daleteProduct: (req, res) => {
    console.log("req.body", req.body);
    var { id } = req.body;

    var remove = product.daleteProduct(id);
    if (remove) {
      res
        .status(200)
        .json({
          status: 200,
          success: "true",
          message: "ສຳເລັດ",
          data: req.body
        });
    } else {
      res
        .json({ status: 405, success: "false", message: "ບໍ່ສຳເລັດ" })
        .status(405);
    }
  },
};