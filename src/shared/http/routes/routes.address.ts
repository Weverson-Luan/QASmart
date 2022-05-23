import { Router } from "express";

import { CreateAddressController } from "../../../modules/address/controllers/create-address-controllers";
import { LoadingAddressController } from "../../../modules/address/controllers/loading-address-controllers";
import { LoadingAddressRelationsUsersController } from "../../../modules/address/controllers/loading-address-relations-users-controllers";

const createAddressController = new CreateAddressController();
const loadingAddressController = new LoadingAddressController();
const loadingAddressRelationsUsersController = new LoadingAddressRelationsUsersController();

const routerAddress = Router();


routerAddress.post("/", createAddressController.handle);
routerAddress.get("/", loadingAddressController.handle);
routerAddress.get("/relations-users", loadingAddressRelationsUsersController.handle);

export {
  routerAddress,
}