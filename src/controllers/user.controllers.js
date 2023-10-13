import { request, response } from "express";
class UserController {
  constructor() {}

  getAllUsers(req = request, res = response) {
    res.send("getAllUsers");
  }

  getUser(req, res) {
    res.send("getUser");
  }
}

export default UserController;
