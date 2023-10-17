import { request, response } from "express";

class UserController {
  #userService;
  constructor(userService) {
    this.#userService = userService;
  }

  getAllUsers(req = request, res = response) {
    res.send("getAllUsers");
  }

  getUser = (req, res) => {
    const user = this.#userService.getUser(req.params);
    res.status(200).json(user);
  };
}

export default UserController;
