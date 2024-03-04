
function Producto(mar, mod, precio) {
    this.marca = mar;
    this.modelo = mod;
    this.precio = precio;
    this.calcularAlquiler = function(dias){
        return this.precio * dias;
    };
}

let auto1 = new Producto("Fiat", "Cronos", 50000);

do {
    console.log("Bienvenido a Vehiculos del Plata Rent a Car")
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    console.log(`Hola ${nombre} ${apellido}`);

    console.log(auto1);

    let cantidadDeDias = Number(prompt("Ingrese cantidad de días a ser alquilado"));
    console.log(`Su alquiler es de: ${cantidadDeDias} días`);

    let totalPagar = auto1.calcularAlquiler(parseInt(cantidadDeDias));
    console.log(`El total a pagar del alquiler por los ${cantidadDeDias} días es de $ ${totalPagar}`);
} while (confirm("¿Desea generar otra reserva?"));
