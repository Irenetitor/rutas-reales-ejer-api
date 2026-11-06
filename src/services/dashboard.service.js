import { findUserByIdModel } from "../model/user.model.js";
import { getProductBySkuModel } from "../model/product.model.js";

export async function postDashboardService(dash) {
  const usuario = await findUserByIdModel(dash.idUsuario);
  const producto = await getProductBySkuModel(dash.skuProducto);

  const obj = {
    cliente: usuario,
    productoDeseado: producto,
  };
  return obj;
}
