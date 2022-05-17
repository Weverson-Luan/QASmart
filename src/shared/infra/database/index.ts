import { createConnection } from "typeorm";

createConnection()
.then(()=> console.log("Connectado ao BD !!"))
.catch((error)=> console.log("Error", error));