var controllercalculadora = require('./calculadoracontroller.js');

module.exports = function(app){

	app.post('/Asumar', controllercalculadora.Sumar); //Llamada a sumar

	app.post('/Arestar', controllercalculadora.Resta); //Llamada a restar

	app.post('/Adividir', controllercalculadora.Div); //Llamada a dividir

	app.post('/Amultiplicar', controllercalculadora.Mul); //Llamada a multiplicar

	app.get('*', function(req,res){ //local host 8080
	res.sendfile('./Calculadora.html'); //Cargga unica de la vista
	});
};