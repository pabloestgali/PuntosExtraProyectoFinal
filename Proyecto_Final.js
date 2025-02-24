// Variables útiles  
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

// Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


// Recargo
var recargo = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0

// Precio final 
var precio_final = 0

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor: ")
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números: ")

var casado = prompt("¿Está casado actualmente?, (Si/No): ")
// Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if ("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?: ")
}
// convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
// convirtiendo la edad del cónyuge si se está casado/a
if ("SI" == casado.toUpperCase()) {
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas? (Si/no)")
var cantidad_hijos = 0
if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = parseInt(prompt('¿Cuántos hijos/as tiene? Ingrese solamente números: '))
}

// Aquí debe calcular el recargo total basado en las respuestas ingresadas

// Recargo basado en la edad del usuario
if (edad_numero >= 18 && edad_numero <= 24) {
    recargo = precio_base * casado_18
    
} else if (edad_numero >= 25 && edad_numero <= 49) {
    recargo = precio_base * casado_25
   
} else if (edad_numero >= 50) {
    recargo = precio_base * casado_50
   
}

// 2. Recargo por la edad del conyuge
if ("SI" == casado.toUpperCase()) {
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
    recargo_conyuge = precio_base * edad_18
   
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
    recargo_conyuge = precio_base * edad_25
   
  } else if (edad_conyuge_numero >= 50) {
    recargo_conyuge = precio_base * edad_50
   
  }
}

// 3. Recargo por la cantidad de hijos
if (cantidad_hijos > 0) {
  recargo_hijos += precio_base * hijos_recargo * cantidad_hijos
}

recargo_total = recargo +recargo_conyuge + recargo_hijos
precio_final = precio_base + recargo_total

// Resultado
alert("Precio Base: " + precio_base)
alert("Para el asegurado: " + nombre)
alert("Recargo Usuario: " + recargo)
alert("Recargo Conyugue: " + recargo_conyuge)
alert("Recargo Hijos: " + recargo_hijos)
alert("El recargo total será de: " + recargo_total)
alert("El precio final será de: " + precio_final)
