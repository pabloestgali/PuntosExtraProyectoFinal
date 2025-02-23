// Variables útiles  
var precio_base = 2000

// Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20% por cada hijo

var propiedad_recargo = 0.35 // 35% por propiedad
var salario_recargo = 0.05 // 5% sobre el salario


// Función para realizar el cálculo de cotización
function calcularCotizacion() {
    // Recargo
    var recargo = 0
    var recargo_total = 0

    // Precio final 
    var precio_final = 0

    // Mensajes de alerta para ingresar datos 
    var nombre = prompt("Ingrese su nombre, por favor")
    var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ")

    var casado = prompt("¿Está casado actualmente?, (Si/No) ")
    // Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge = prompt("¿Qué edad tiene su esposo/a?")
    }
    // convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad)
    var edad_conyuge_numero = 0
    // convirtiendo la edad del cónyuge si se está casado/a
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge_numero = parseInt(edad_conyuge)
    }

    var hijos = prompt("¿Tiene hijos o hijas? (Si/no")
    var cantidad_hijos = 0
    if ("SI" == hijos.toUpperCase()) {
        cantidad_hijos = parseInt(prompt('¿Cuántos hijos/as tiene? Ingrese solamente números'))
    }

    var propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"))
    var salario = parseFloat(prompt("¿Cuál es su salario mensual?"))

    // Aquí debe calcular el recargo total basado en las respuestas ingresadas

    // Recargo basado en la edad del usuario
    if (edad_numero >= 18 && edad_numero <= 24) {
        recargo = precio_base * edad_18
        recargo_total = recargo_total + recargo
    } else if (edad_numero >= 25 && edad_numero <= 49) {
        recargo = precio_base * edad_25
        recargo_total = recargo_total + recargo
    } else if (edad_numero >= 50) {
        recargo = precio_base * edad_50
        recargo_total = recargo_total + recargo
    }

    // Si el usuario está casado, se puede agregar el recargo adicional por su cónyuge
    if ("SI" == casado.toUpperCase()) {
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
            recargo = precio_base * edad_18
            recargo_total = recargo_total + recargo
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
            recargo = precio_base * edad_25
            recargo_total = recargo_total + recargo
        } else if (edad_conyuge_numero >= 50) {
            recargo = precio_base * edad_50
            recargo_total = recargo_total + recargo
        }
    }

    // Si tiene hijos, se agrega un recargo adicional por cada hijo
    if (cantidad_hijos > 0) {
        recargo_total += precio_base * hijos_recargo * cantidad_hijos
    }

    // Recargo por propiedades (35% por propiedad)
    recargo_total += precio_base * propiedad_recargo * propiedades

    // Recargo por salario (5% sobre el salario)
    recargo_total += salario * salario_recargo

    // Calcular el precio final
    precio_final = precio_base + recargo_total

    // Resultado
    alert("Para el asegurado " + nombre)
    alert("El recargo total será de: " + recargo_total)
    alert("El precio final será de: " + precio_final)
}

// Bucle para realizar cotizaciones hasta que el usuario ingrese "Salir"
while (true) {
    var continuar = prompt("¿Desea realizar una cotización? Ingrese 'Salir' para finalizar o 'Sí' para continuar.")
    if (continuar.toUpperCase() === "SALIR") {
        alert("Gracias por utilizar el sistema de cotizaciones.")
        break
    } else if (continuar.toUpperCase() === "SI") {
        calcularCotizacion()
    } else {
        alert("Por favor ingrese 'Sí' para continuar o 'Salir' para finalizar.")
    }
}

