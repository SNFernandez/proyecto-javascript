
let alumnoUsuario = "coder"
let passwordUsuario = "coder"
let usuarioIngresado = prompt("Ingrese su usuario")
let passwordIngresado = prompt("Ingrese su contraseña")
if (usuarioIngresado === alumnoUsuario && passwordIngresado === passwordUsuario) {
    alert("Puede ingresar, todos los datos son validos.");
} else {
    alert("No puede ingresar, los datos son invalidos")
} while (usuarioIngresado != alumnoUsuario && passwordIngresado != passwordUsuario) {
    let alumnoUsuario = "coder"
    let passwordUsuario = "coder"
    let usuarioIngresado = prompt("Ingrese su usuario")
    let passwordIngresado = prompt("Ingrese su contraseña")
}

alert("Bienvenidos alumnos a la pagina del Instituto.");
alert("Tendran que ingresar sus datos personales e incluso todas sus notas, para evaluarles si lograron aprobar el curso asignado.");
alert("Si reprueba el curso, tendrá que volver a entregar o volver a cursar en función de la calificación final obtenida.");

let nombreAlumno = prompt("ingrese a la pagina su Nombre");
let apellidoAlumno = prompt("ingrese su Apellido");
console.log(nombreAlumno);
console.log(apellidoAlumno);

let primeraEntregaNota = parseInt(prompt("Ingrese la nota de la Primera entrega."));
console.log("La nota de la Primera Entrega es:");
console.log(primeraEntregaNota);
let segundaEntregaNota = parseInt(prompt("Ingrese la nota de la Segunda entrega."));
console.log("La nota de la Segunda Entrega es:");
console.log(segundaEntregaNota);
let terceraEntregaNota = parseInt(prompt("Ingrese la nota de la Tercera entrega."));
console.log("La nota de la Tercera entrega es:");
console.log(terceraEntregaNota);
let cuartaEntregaNota = parseInt(prompt("Ingrese la nota de la Cuarta y ultima entrega del curso."));
console.log("La nota de la Cuarta entrega es:");
console.log(cuartaEntregaNota);

let promedioFinal = (primeraEntregaNota + segundaEntregaNota + terceraEntregaNota + cuartaEntregaNota) / 4;
console.log("La nota final promediada es:")
console.log(promedioFinal)

let aprobado = true;
if (promedioFinal >= 6) {
    alert("Aprobaste el curso, Felicidades");
} else if (promedioFinal >= 4.5 && promedioFinal <= 5.9) {
    alert("Tenes que realizar otra entrega para aprobar el curso");
    let recuperatorioEntrega = parseInt (prompt("Ingrese la nota del recuperatorio"))
    if (recuperatorioEntrega >= 6){
    alert ("Aprobaste el recuperatorio, Felicidades")
    console.log ("La nota del recuperatorio es:")
    console.log (recuperatorioEntrega)
    } else if  (recuperatorioEntrega <= 5.9){
        alert ("Desaprobaste el recuperatorio, volve a recursar")
        console.log("La nota del recuperatorio es:")
        console.log(recuperatorioEntrega)
    }
} else {
    (promedioFinal >= 0 && promedioFinal >= 4.4);
    alert("Reprobaste el curso,volve a intentarlo en el proximo");
}
