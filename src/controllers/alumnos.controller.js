const alumnos = require('../../datos/alumnos.json')

const getAllAlumnos = (req, res)=>{
    res.json( alumnos ).status(200)
    console.log(alumnos);
}

function getAlumnoByDni(req, res) {
    const dni = req.params.dni;
    const resultado = alumnos.find(alumno => alumno.dni == dni);
    const mostrar= console.log("resultado")
    if (resultado) {
        res.status(200).json(resultado).status(200);
    } else {
        res.status(404).json({ mensaje: `El alumno con dni ${dni} no fue encontrado` });
        alumnos.controller.getAlumnoByDni('resultado1').innerHTML = resultado;
    }

}

const deleteAlumnoByDni = (req, res) => {
    const dni = req.params.dni
    const indice = alumnos.findIndex( alumno => alumno.dni == dni )
    if(indice==-1) {
        res.status(404).
        json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `El alumno con dni ${dni} no fue encontrado`
            }
        )
    } else {
        const alumno = alumnos[indice];
        const resultado = alumnos.splice(indice,1)
        res.status(200)
        .json(
            {resultado: "La operación de borrado pudo realizarse con exito",
                  alumno: alumno
            }
        )
    }
}


module.exports = { 
    getAllAlumnos, 
    getAlumnoByDni,
    deleteAlumnoByDni }