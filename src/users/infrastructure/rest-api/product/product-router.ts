import express from "express";

import { productController } from "../../dependencies";

const productRouter = express.Router();

productRouter.get("/:id", productController.getProduct.bind(productController));
productRouter.post(
  "/create",
  productController.createProduct.bind(productController)
);
productRouter.post(
  "/update",
  productController.updateProduct.bind(productController)
);

export { productRouter };
