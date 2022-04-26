import express from "express";
import { routers } from "./shared/http/routes";

const app = express();


app.use(routers);


app.listen(3333, ()=> {
  console.log("Start is running 😃 !");
});