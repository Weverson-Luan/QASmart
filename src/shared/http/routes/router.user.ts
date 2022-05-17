import { Router } from "express";

import { UsersCreateControllers } from "../../../modules/users/controllers/users-create-controllers";
import { LoadingUsersController } from "../../../modules/users/controllers/loading-users-controller";

const usersCreateControllers = new UsersCreateControllers();
const loadingUsersController = new LoadingUsersController();
const routerUser = Router();

  routerUser.post("/",usersCreateControllers.handle);
  routerUser.get("/",loadingUsersController.handle);

export { routerUser }



