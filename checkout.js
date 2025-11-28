let subtotal = 0;
let descuentoAplicado = 0;
let cuponUsado = false;
let costoEnvio = null; 

let opcion = 0;

while (opcion !== 5) {

    console.log("\n ***Bienvenido al Checkout hecho por el viejo nary***");
    console.log("1. Agregar Producto (50.000)");
    console.log("2. Aplicar Cupn");
    console.log("3. Calcular y consultar Costo de Envío");
    console.log("4. Calcular Total a Pagar");
    console.log("5. Salir");

    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {

        case 1: 
            subtotal += 50000;
            console.log("\nProducto agregado. Subtotal actual: " + subtotal);
            break;

        case 2:
            if (cuponUsado) {
                console.log("\nYa aplicaste el cupon ome");
                break;
            }

            let codigo = prompt("Ingrese el código del cupón: ");

            if (codigo === "DTO10") {
                descuentoAplicado = subtotal * 0.10;
                cuponUsado = true;
                console.log("Cupón aplicado: 10% de descuento.");
            } 
            else if (codigo === "DTO20") {
                descuentoAplicado = subtotal * 0.20;
                cuponUsado = true;
                console.log("Cupón aplicado: 20% de descuento.");
            } 
            else {
                console.log("Cupón no válido.");
            }
            break;

        case 3: 
            let subtotalConDescuento = subtotal - descuentoAplicado;

            if (subtotalConDescuento < 100000) {
                costoEnvio = 15000;
                console.log("\nEl envío cuesta 15.000.");
            } else {
                costoEnvio = 0;
                console.log("\nEl envio le salio gratis mi h");
            }
            break;

        case 4: 
            if (costoEnvio === null) {
                console.log("\nPrimero calcula el costo de envío (opción 3).");
                break;
            }

            let totalFinal = (subtotal - descuentoAplicado) + costoEnvio;

            console.log("\n=== RESUMEN DEL PAGO ===");
            console.log("Subtotal: " + subtotal);
            console.log("Descuento: " + descuentoAplicado);
            console.log("Envío: " + costoEnvio);
            console.log("TOTAL A PAGAR: " + totalFinal);
            break;

        case 5:
            console.log("\nSaliendo del sistema.");
            break;

        default:
            console.log("Opción inválida mano, ponga una que si funcione.");
    }
}
