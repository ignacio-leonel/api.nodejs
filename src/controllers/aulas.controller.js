const aulas = require('../../datos/aulas.json')

const getAllAulas = (req, res)=>{
    res.status(200).json(aulas)
}

const getAulasById = ( req, res) => {
    const id = req.params.id
    const indice = aulas.findIndex( aula => aula.id == id)
    if(indice >= 0 ){
        res.status(200)
        .json(aulas[indice])
    } else {
        res.status(404)
        .json({
            mensaje : `El aula con id ${id} no fue encontrada.`
        })
    }
}

module.exports = { getAllAulas, getAulasById }