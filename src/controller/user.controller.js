import { createNewUserService } from "../services/user.service.js";

export function createUserController(req, res) {
  const userinfo = req.body;
  res.status(200).send(createNewUserService(userinfo));
}
