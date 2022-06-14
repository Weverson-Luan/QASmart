import { Router } from "express";

import { ProductsCreateControllers } from "../../../modules/products/controllers/products-cretae-controllers";


const productsCreateControllers = new ProductsCreateControllers();

const routerProducts = Router();

routerProducts.post("/",productsCreateControllers.handle);

export { routerProducts }



