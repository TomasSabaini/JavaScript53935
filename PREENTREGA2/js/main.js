class CarritoAutos {
    constructor(matricula, marca, modelo, precio) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

function calcularPrecioTotalConIVA(precio, dias) {
    const precioTotal = precio * dias;
    const iva = 0.21; 
    const precioTotalConIVA = precioTotal * (1 + iva);
    return precioTotalConIVA;
}

const auto1 = new CarritoAutos("AF611FP", "Toyota", "Corolla", 50000);
const auto2 = new CarritoAutos("AF611FQ", "Honda", "Civic", 60000);
const auto3 = new CarritoAutos("AF611FR", "Ford", "Focus", 55000);

alert("Bienvenido a Vehiculos del Plata Rent a Car");

alert("Opciones de autos disponibles:\n1. Matrícula: " + auto1.matricula + ", Marca: " + auto1.marca + ", Modelo: " + auto1.modelo + ", Precio por día: $" + auto1.precio + "\n2. Matrícula: " + auto2.matricula + ", Marca: " + auto2.marca + ", Modelo: " + auto2.modelo + ", Precio por día: $" + auto2.precio + "\n3. Matrícula: " + auto3.matricula + ", Marca: " + auto3.marca + ", Modelo: " + auto3.modelo + ", Precio por día: $" + auto3.precio);

let opcion = prompt("Seleccione el auto deseado (1, 2 o 3):");
let autoSeleccionado;

switch (parseInt(opcion)) {
    case 1:
        autoSeleccionado = auto1;
        break;
    case 2:
        autoSeleccionado = auto2;
        break;
    case 3:
        autoSeleccionado = auto3;
        break;
    default:
        alert("Opción no válida.");
}

let fechaInicio = prompt("Ingrese la fecha de inicio del alquiler (YYYY-MM-DD):");
let fechaFin = prompt("Ingrese la fecha de fin del alquiler (YYYY-MM-DD):");

let fecha1 = new Date(fechaInicio);
let fecha2 = new Date(fechaFin);
let diffTime = Math.abs(fecha2 - fecha1);
let diasAlquiler = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

let precioTotalConIVA = calcularPrecioTotalConIVA(autoSeleccionado.precio, diasAlquiler);

alert("Auto seleccionado:\nMatrícula: " + autoSeleccionado.matricula + "\nMarca: " + autoSeleccionado.marca + "\nModelo: " + autoSeleccionado.modelo + "\n\nFecha de inicio del alquiler: " + fechaInicio + "\nFecha de fin del alquiler: " + fechaFin + "\n\nCantidad de días de alquiler: " + diasAlquiler + "\n\nPrecio total con IVA: $" + precioTotalConIVA.toFixed(2));