let subtotalCompra = 0;
let descuentoAplicado = 0;
let porcentajeDescuento = 0;
let costoEnvio = 0;
let cuponYaAplicado = false;
let envioCalculado = false;
const PRECIO_PRODUCTO = 50000;
let continuar = true;

while (continuar) {
  let opcion = prompt(
    "Tienda Web \n" + 
    "Menu Principal \n" +
    "1. Agregar Producto (Precio: $50.000)\n" +
    "2. Aplicar Cupon de Descuento\n" +
    "3. Calcular Costo de Envio\n" +
    "4. Calcular Total a Pagar\n" +
    "5. Salir\n" +
    "Seleccione una opcion (1-5)");
  if (opcion == "1") {
    subtotalCompra = subtotalCompra + PRECIO_PRODUCTO;
    console.log("|Producto agregado| = Subtotal actual: $" + subtotalCompra);
    envioCalculado = false;
  } else if (opcion == "2") {
    if (cuponYaAplicado == true) {
      console.log("Ya se aplico un cupon de descuento");
    } else if (subtotalCompra == 0) {
      console.log("Debe agregar productos antes de aplicar un cupon de descuento");
    } else {
      let codigoCupon = prompt(
        "Ingrese el codigo del cupon (DTO10 o DTO20):");
      if (codigoCupon == "DTO10") {
        porcentajeDescuento = 10;
        descuentoAplicado = subtotalCompra * 0.1;
        subtotalCompra = subtotalCompra - descuentoAplicado;
        cuponYaAplicado = true;
        console.log("Cupon aplicado: 10% de descuento (-$" + descuentoAplicado + ")");
        console.log("Nuevo subtotal: $" + subtotalCompra);
        envioCalculado = false;
      } else if (codigoCupon == "DTO20") {
        porcentajeDescuento = 20;
        descuentoAplicado = subtotalCompra * 0.2;
        subtotalCompra = subtotalCompra - descuentoAplicado;
        cuponYaAplicado = true;
        console.log("Cupon aplicado: 20% de descuento (-$" + descuentoAplicado + ")");
        console.log("Nuevo subtotal: $" + subtotalCompra);
        envioCalculado = false;
      } else {
        console.log("Cupon no valido");
      }
    }
  } else if (opcion == "3") {
    if (subtotalCompra == 0) {
      console.log("Debe agregar productos antes de calcular el envio");
    } else {
      if (subtotalCompra < 100000) {
        costoEnvio = 15000;
        console.log("Costo de envio: $" + costoEnvio);
      } else {
        costoEnvio = 0;
        console.log("¡Envio Gratis!");
      }
      envioCalculado = true;
    }
  } else if (opcion == "4") {
    if (subtotalCompra == 0) {
      console.log("No hay productos en el carrito");
    } else if (envioCalculado == false) {
      console.log("Debe calcular el costo de envio primero");
    } else {
      console.log("--- Resumen de Compra ---");
      console.log("Subtotal: $" + subtotalCompra);
      if (cuponYaAplicado == true) {
        console.log(
          "Descuento aplicado (" + porcentajeDescuento + "%): -$" + descuentoAplicado,);
      } else {
        console.log("Descuento aplicado: $0");
      }
      if (costoEnvio == 0) {
        console.log("Costo de envio: Gratis");
      } else {
        console.log("Costo de envio: $" + costoEnvio);
      }
      let totalPagar = subtotalCompra + costoEnvio;
      console.log("TOTAL A PAGAR: $" + totalPagar);
    }
  } else if (opcion == "5") {
    console.log("Gracias por visitar nuestra tienda. ¡Hasta luego!");
    continuar = false;
  } else {
    console.log("Opcion no invalida. Seleccione una opcion del 1 al 5");
  }
}
