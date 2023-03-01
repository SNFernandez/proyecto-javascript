const formulario = document.getElementById("form")
let intentos = 0;
const maxIntentos = 3;
let alumnoUsuario = "coder";
let passwordUsuario = "coder"
const boton = document.getElementById("boton")

class alumno {
    constructor(nombre, apellido, promedio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }
}
const alumno0 = new alumno("Lucas", "Rob", 9);
const alumno1 = new alumno("Maria", "Palechii", 7.75)
const alumno3 = new alumno("Matias", "Hazard", 6.75)


class Deuda {
    constructor(nombre, apellido, cuota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuota = cuota;
    }
}

const formNom = document.getElementById("nombres")
formNom.addEventListener("submit", (e) => {
    e.preventDefault()
    nombreCompleto()
})
function nombreCompleto() {
    const nombreAlumno = document.getElementById("nombre").value
    const apellidoAlumno = document.getElementById("apellido").value
    const alumno = document.getElementById("alumno")

    alumno.innerHTML = `Nombre y Apellido del alumno: <p>${nombreAlumno}  ${apellidoAlumno}</p>`
    console.log("El nombre del Alumno es: " + nombreAlumno + apellidoAlumno)
}



const formSum = document.getElementById("calificacion")
formSum.addEventListener("submit", (e) => {
    e.preventDefault()
    sumarNotas()
})
function sumarNotas() {
    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const nota3 = Number(document.getElementById("nota3").value)
    const nota4 = Number(document.getElementById("nota4").value)

    const promedioFinal = (nota1 + nota2 + nota3 + nota4) / 4
    console.log("el promedio es", promedioFinal)
    const notas = document.getElementById("notas")
    notas.innerText = `La nota del promedio final es: ${promedioFinal}`

    let aprobado = true;
    if (promedioFinal >= 6) {
        console.log("Aprobaste el curso, Felicidades");
    } else if (promedioFinal >= 4 && promedioFinal <= 5.9) {
        console.log("Tenes que realizar otra entrega para aprobar el curso");
    } else {
        (promedioFinal >= 0 && promedioFinal >= 3.9);
        console.log("Reprobaste el curso,volve a intentarlo en el proximo");
    }
    const nombreAlumno = document.getElementById("nombre").value
    const apellidoAlumno = document.getElementById("apellido").value

    const alumno2 = new alumno(nombreAlumno, apellidoAlumno, promedioFinal)

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
}




const formRec = document.getElementById("recuperar")
formRec.addEventListener("submit", (e) => {
    e.preventDefault()
    recuperatorio()
})
function recuperatorio() {
    const recuperatorioEntrega = Number(document.getElementById("recuperatorio").value)
    const notare = document.getElementById("notare")
    notare.innerText = `La nota del recuperatorio es:  ${recuperatorioEntrega}`

    if (recuperatorioEntrega >= 6) {
        console.log("Aprobaste el recuperatorio, Felicidades")
        console.log("La nota del recuperatorio es:", recuperatorioEntrega)
    } else if (recuperatorioEntrega < 6) {
        console.log("Desaprobaste el recuperatorio, volve a recursar")
        console.log("La nota del recuperatorio es:", recuperatorioEntrega)
    }
}



const formSit = document.getElementById("estado")
formSit.addEventListener("submit", (e) => {
    e.preventDefault()
    situacion()
})
function situacion() {
    const cuotaAlumno = document.getElementById("estados").value
    const pago = document.getElementById("pagos")
    pago.innerText = `El estado de la cuenta es: ${cuotaAlumno}`

    const nombreAlumno = document.getElementById("nombre").value
    const apellidoAlumno = document.getElementById("apellido").value
    console.log("La cuota del alumno ", nombreAlumno, "", apellidoAlumno, " esta en estado: ", cuotaAlumno)

    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const nota3 = Number(document.getElementById("nota3").value)
    const nota4 = Number(document.getElementById("nota4").value)
    const promedioFinal = (nota1 + nota2 + nota3 + nota4) / 4
    const alumno2 = new alumno(nombreAlumno, apellidoAlumno, promedioFinal)

    let cuota = []
    cuota.push(alumno0.apellido + "." + "Pagado")
    cuota.push(alumno1.apellido + "." + "Pagado")
    cuota.push(alumno2.apellido + "." + cuotaAlumno)
    cuota.push(alumno3.apellido + "." + "Deuda")
    console.log(cuota)

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



formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("user").value
    const password = document.getElementById("password").value
    container.classList.add("container")

    if (user === alumnoUsuario && password === passwordUsuario) {
        console.log("Puede ingresar, todos los datos son válidos.")

        container.classList.remove("container");

    } else {
        intentos++;
        console.log(`No puede ingresar, los datos son inválidos. Intento ${intentos} de ${maxIntentos}.`)
    }
    if (intentos == maxIntentos) {
        boton.classList.add("error")
        console.log("Ha excedido el número máximo de intentos. Por favor, intente más tarde.")
        setTimeout(function () {
            boton.style.display = "block";
            boton.classList.remove("error");
            intentos = 0;
        }, 10000)
    }
})