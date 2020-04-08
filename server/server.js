require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Obtener registros
app.get('/usuario', function(req, res) {
	res.json('get Usuario');
});

//Añadir registro
app.post('/usuario', function(req, res) {
    let body = req.body;

    if(body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario y no esta definido',
        });
    } else {
        res.json({persona: body});
    }

	
});


//actualizar registros
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
	res.json({
        id
    });
});

//eliminar registros
app.delete('/usuario', function(req, res) {
	res.json('delete Usuario');
});


app.listen(process.env.PORT, () => {
	console.log('Escuchando puerto', 3000);
});
