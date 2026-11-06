const users = [
  { idUsuario: 1, nombre: "Marta", correo: "marta@test.com" },
  { idUsuario: 2, nombre: "Pedro", correo: "pedro@test.com" },
];

export function createNewUserModel(userinfo) {
  console.log(userinfo); // 2mins
  return userinfo;
}

export async function findUserByIdModel(idUsuario) {
  return users.find((user) => user.idUsuario == idUsuario);
}
