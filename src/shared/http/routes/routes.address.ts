import { Router } from "express";
import { CreateAddressController } from "../../../modules/address/controllers/create-address-controllers";


const createAddressController = new CreateAddressController();

const routerAddress = Router();


routerAddress.post("/", createAddressController.handle);


export {
  routerAddress,
}