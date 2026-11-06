import { createNewUserModel } from "../model/user.model.js";

export function createNewUserService(userinfo) {
  return createNewUserModel(userinfo);
}
