import "reflect-metadata";
import  'dotenv/config';
import express from "express";

import "./shared/infra/database";
import { routers } from "./shared/http/routes";

const app = express();

app.use(express.json());

app.use(routers);


app.listen(process.env.PORT_SERVER, ()=> {
  console.log("Start is running 😃 !");
});