import { getProductBySkuModel } from "../model/product.model.js";

export function getProductService(productinfo) {
  return getProductBySkuModel(productinfo);
}
