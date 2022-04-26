import { Router } from "express";
import { routerUser } from "./router.user";


const routers = Router();

routers.use("/users", routerUser);

export { routers };





