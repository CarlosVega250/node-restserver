require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

app.use(require('./routes/index'));




let connectToDB = async () => {
	await mongoose.connect(
		process.env.urlDB ,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		(err) => {
			if (err) throw err;

			console.log('Base de datos online');
		}
	);
};

connectToDB();


app.listen(process.env.PORT, () => {
	console.log('Escuchando puerto', 3000);
});
