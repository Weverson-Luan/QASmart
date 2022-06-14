import { Router } from "express";

import { ProductsCreateControllers } from "../../../modules/products/controllers/products-cretae-controllers";
import { LoadingProductsController } from "../../../modules/products/controllers/loading-products-controllers";

const productsCreateControllers = new ProductsCreateControllers();
const loadingProductsController = new LoadingProductsController();

const routerProducts = Router();

routerProducts.post("/",productsCreateControllers.handle);
routerProducts.get("/",loadingProductsController.handle);

export { routerProducts }



