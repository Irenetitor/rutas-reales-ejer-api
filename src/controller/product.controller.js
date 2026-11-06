import { getProductService } from "../services/product.service.js";

export function getProductController(req, res) {
  const productinfo = req.body.skuBusqueda;
  res.status(200).send(getProductService(productinfo));
}
