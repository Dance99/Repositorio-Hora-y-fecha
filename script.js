//Saludo segun hora del dia//
   
const fecha = new Date();
    const hora = fecha.getHours();
    let saludo = parseInt(prompt("ingresa la hora"))


if (hora < 12) {
    saludo = "¡Buenos Días!";
} else if (hora < 18) {
    saludo = "Buenas Tardes!";
} else {
    saludo = "¡Buenas Noches!";
}
//Mostrar saludo//
document.write (saludo);
