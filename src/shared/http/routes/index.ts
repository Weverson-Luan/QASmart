import { Router } from "express";
import { routerUser } from "./router.user";
import { routerAddress } from "./routes.address";

const routers = Router();

routers.use("/v1/users", routerUser);
routers.use("/v1/address", routerAddress);

export { routers };





