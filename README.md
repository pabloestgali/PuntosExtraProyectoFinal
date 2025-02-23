# PuntosExtraProyectoFinal
Puntos extra para el proyecto final del curso 

El programa tiene 2 puntos adicionales que seria la necesidad de obtener cotizaciones hasta que el usuario detenga el programa (en bucle) y recardos adicionales tomando el cuenta el sueldo del usuario y la cantidad de propiedades que posee. 

Realmente se podrían mejorar muchas cosas. Esencialmente considero que no se hacen validaciones estrictas, a nivel de sintaxis en javascript es mejor usar "let" y "const" en vez de "var".  El uso de funciones podría hacer el código más sencillo, o inclusive se podrían agregar objetos. Por ejemplo:

```javascript
const recargos = {
    edad: { 18: 0.1, 25: 0.2, 50: 0.3 },
    hijos: 0.2,
    propiedad: 0.35,
    salario: 0.05
};
```
El ciclo de cotización podría replantearse de esta manera: 

```javascript
function solicitarCotizacion() {
    let continuar = prompt("¿Desea realizar una cotización? Ingrese 'Salir' para finalizar o 'Sí' para continuar.");
    switch (continuar.toUpperCase()) {
        case 'SALIR':
            alert("Gracias por utilizar el sistema de cotizaciones.");
            return false;
        case 'SI':
            calcularCotizacion();
            return true;
        default:
            alert("Por favor ingrese 'Sí' para continuar o 'Salir' para finalizar.");
            return true;
    }
}

while (solicitarCotizacion()) {}
```

