import { Router } from "express";
import { routerUser } from "./router.user";
import { routerAddress } from "./routes.address";
import { routerProducts } from "./router.products";

const routers = Router();

routers.use("/v1/users", routerUser);
routers.use("/v1/address", routerAddress);
routers.use("/v1/products", routerProducts);

export { routers };





