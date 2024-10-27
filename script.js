//Saludo segun hora del dia//
function SaludarUsuario() {
    const fecha = new Date();
    const hora = fecha.getHours();
}
let saludo;
if (hora >=5 && hora <12) {
    saludo = "¡Buenos Días!";
} else if (hora >=12 && hora <18) {
    saludo = "Buenas Tardes!";
} else {
    saludo = "¡Buenas Noches!";
}
//Mostrar saludo//
document.write ('Saludo');