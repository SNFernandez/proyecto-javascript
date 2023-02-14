let alumnoUsuario = "coder";
let passwordUsuario = "coder";
let intentos = 0;
const maxIntentos = 3;

while (intentos < maxIntentos) {
    let usuarioIngresado = prompt("Ingrese su usuario").toLowerCase();
    let passwordIngresado = prompt("Ingrese su contraseña").toLowerCase();

    if (usuarioIngresado === alumnoUsuario && passwordIngresado === passwordUsuario) {
        alert("Puede ingresar, todos los datos son válidos.");
        break;
    } else {
        intentos++;
        alert("No puede ingresar, los datos son inválidos");
    }
}

if (intentos === maxIntentos) {
    alert("Ha alcanzado el máximo número de intentos permitidos, por favor intente más tarde");
}else {
alert("Bienvenidos alumnos a la pagina del Instituto.");
alert("Tendran que ingresar sus datos personales e incluso todas sus notas, para evaluarles si lograron aprobar el curso asignado.");
alert("Si reprueba el curso, tendrá que volver a entregar o volver a cursar en función de la calificación final obtenida.");

let nombreAlumno = prompt("ingrese a la pagina su Nombre");
let apellidoAlumno = prompt("ingrese su Apellido");
console.log("Nombre y Apellido del alumno")
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
    let recuperatorioEntrega = parseInt(prompt("Ingrese la nota del recuperatorio"))
    if (recuperatorioEntrega >= 6) {
        alert("Aprobaste el recuperatorio, Felicidades")
        console.log("La nota del recuperatorio es:")
        console.log(recuperatorioEntrega)
    } else if (recuperatorioEntrega <= 5.9) {
        alert("Desaprobaste el recuperatorio, volve a recursar")
        console.log("La nota del recuperatorio es:")
        console.log(recuperatorioEntrega)
    }
} else {
    (promedioFinal >= 0 && promedioFinal >= 4.4);
    alert("Reprobaste el curso,volve a intentarlo en el proximo");
}
class alumno {
    constructor(nombre, apellido, promedio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }
}
const alumno0 = new alumno("Lucas", "Rob", 9);
const alumno1 = new alumno("Maria", "Palechii", 7.75)
const alumno2 = new alumno(nombreAlumno, apellidoAlumno, promedioFinal)
const alumno3 = new alumno("Matias", "Hazard", 6.75)

console.log("Las notas de los Alumnos son:")
console.log(alumno0)
console.log(alumno1)
console.log(alumno2)
console.log(alumno3)

alumnos = [alumno0, alumno1, alumno2, alumno3]
notaAlta = Math.max(...alumnos.map(alumno => alumno.promedio))
const alumnoNotaAlta = alumnos.find(alumno => alumno.promedio === notaAlta)
notaBaja = Math.min(...alumnos.map(alumno => alumno.promedio))
const alumnoNotaBaja = alumnos.find(alumno => alumno.promedio === notaBaja)
console.log("El alumno con la nota mas alta es: " + alumnoNotaAlta.nombre, alumnoNotaAlta.apellido)
console.log(`Su nota mas alta fue: ${notaAlta}`)
console.log("El alumno con la nota mas baja es: " + alumnoNotaBaja.nombre, alumnoNotaBaja.apellido)
console.log(`Su nota mas baja fue: ${notaBaja}`)

const cuotaAlumno = prompt("Ingrese |Pagado| o |Deuda| dependiendo si pago o no la cuota.")
console.log("La cuota del alumno ", nombreAlumno, "", apellidoAlumno, " esta en estado: ", cuotaAlumno)
let cuota = []
cuota.push(alumno0.apellido + "." + "Pagado")
cuota.push(alumno1.apellido + "." + "Pagado")
cuota.push(alumno2.apellido + "." + cuotaAlumno)
cuota.push(alumno3.apellido + "." + "Deuda")
console.log(cuota)

class Deuda {
    constructor(nombre, apellido, cuota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuota = cuota;
    }
}

const deudas = [
    new Deuda(alumno0.nombre, alumno0.apellido, "Pagado"),
    new Deuda(alumno1.nombre, alumno1.apellido, "Pagado"),
    new Deuda(alumno2.nombre, alumno2.apellido, cuotaAlumno),
    new Deuda(alumno3.nombre, alumno3.apellido, "Deuda")
];

const deudasPendientes = deudas.filter(deuda => deuda.cuota === "Deuda");
console.log("Las Deudas:")
console.log(deudasPendientes);
}
