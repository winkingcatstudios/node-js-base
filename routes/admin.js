const path = require("path");

const express = require("express");
const { check } = require("express-validator");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, isAdmin, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, isAdmin, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  isAuth,
  isAdmin,
  [
    check("title")
      .trim()
      .isString()
      .isLength({ min: 3, max: 127 }),
    check("price").trim().isFloat(),
    check("description").trim().isLength({ min: 3, max: 400 }),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, isAdmin, adminController.getEditProduct);

router.post(
  "/edit-product",
  isAuth,
  isAdmin,
  [
    check("title")
      .trim()
      .isString()
      .isLength({ min: 3, max: 127 }),
    check("price").trim().isFloat(),
    check("description").trim().isLength({ min: 3, max: 400 }),
  ],
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, isAdmin, adminController.deleteProduct);

module.exports = router;

