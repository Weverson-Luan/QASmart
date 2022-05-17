import { Router } from "express";

import { UsersCreateControllers } from "../../../modules/users/controllers/users-create-controllers";

const usersCreateControllers = new UsersCreateControllers();

const routerUser = Router();

  routerUser.post("/",usersCreateControllers.handle);

export { routerUser }



