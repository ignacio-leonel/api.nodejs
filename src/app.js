const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const alumnosRouter = require('./routes/alumnos.route')
const aulasRouter = require('./routes/aulas.routes')
const docentesRouter = require('./routes/docentes.routes')

app.use('/alumnos', alumnosRouter.router)
app.use('/aulas', aulasRouter.router )
app.use('/docentes', docentesRouter.router )

app.listen(PORT, ()=>{console.log(`App lista escuhando en el puerto ${PORT}`)} )

