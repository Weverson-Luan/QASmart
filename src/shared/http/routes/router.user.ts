import { Router } from "express";

const routerUser = Router();

  routerUser.get("/", (request, response)=> {

  return response.status(200).json({
    error: false,
    users: [
      {
        id: '1', name: "Luan Dev"
      },
      {
        id: '2', name: "Carol"
      },
      {
        id: '3', name: "Jenifer"
      },
    ]
  }) 
});

export { routerUser }


