import { request, response } from "express";

class UserController {
  constructor() {}

  getAllUsers(req = request, res = response) {
    res.send("getAllUsers");
  }

  getUser(req, res) {
    console.log(req.params);
    res.send("getUser");
  }
}

export default UserController;
