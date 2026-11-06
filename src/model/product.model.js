const products = [
  { skuProducto: "Z9Y8", nombre: "Teclado", precio: 25 },
  { skuProducto: "A1B2", nombre: "Ratón", precio: 12 },
];

export async function getProductBySkuModel(skuProducto) {
  return products.find((product) => product.skuProducto == skuProducto);
}
