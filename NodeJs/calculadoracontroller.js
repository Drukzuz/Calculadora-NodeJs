class _Operacion{
	constructor(_numero1, _numero2)
	{
		this.Numero1 = _numero1; //estraccion del valor numero1
		this.Numero2 = _numero2; //estraccion del valor numero2
	}
	Sumar()
	{
		return parseInt(this.Numero1)+parseInt(this.Numero2); //Proceso matematico
	}
	SumarAsinc() //Funciona de manera asincronada, suma una cantidad
	{
		var objeto = this;
		return new Promise(function(resolve,reject)
		{ try 
			{
				resolve(parseInt(objeto.Numero1)+parseInt(objeto.Numero2));
			}
			catch (err)
			{
				reject(err.messbyte);
			}
		});
	}
	Resta()
	{
		return parseInt(this.Numero1)-parseInt(this.Numero2); //Proceso matematico
	}
	RestaAsinc() //Funciona de manera asincronada, resta una cantidad
	{
		var objeto = this;
		return new Promise(function(resolve,reject)
		{ try 
			{
				resolve(parseInt(objeto.Numero1)-parseInt(objeto.Numero2));
			}
			catch (err)
			{
				reject(err.messbyte);
			}
		});
	}
	Mul()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2); //Proceso matematico
	}
	MulAsinc() //Funciona de manera asincronada, multiplica una cantidad
	{
		var objeto = this;
		return new Promise(function(resolve,reject)
		{ try 
			{
				resolve(parseInt(objeto.Numero1)*parseInt(objeto.Numero2));
			}
			catch (err)
			{
				reject(err.messbyte);
			}
		});
	}
	Div()
	{
		return parseInt(this.Numero1)/parseInt(this.Numero2); //Proceso matematico
	}
	DivAsinc() //Funciona de manera asincronada, divide una cantidad
	{
		var objeto = this;
		return new Promise(function(resolve,reject)
		{ try 
			{
				resolve(parseInt(objeto.Numero1)/parseInt(objeto.Numero2));
			}
			catch (err)
			{
				reject(err.messbyte);
			}
		});
	}
	Parte()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2)/100; //Proceso matematico
	}
	ParteAsinc() //Funciona de manera asincronada, saca el porcentaje de una cantidad
	{
		var objeto = this;
		return new Promise(function(resolve,reject)
		{ try 
			{
				resolve(parseInt(objeto.Numero1)*parseInt(objeto.Numero2)/100);
			}
			catch (err)
			{
				reject(err.messbyte);
			}
		});
	}
}

exports.Sumar = function(req, res){
	let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
	res.json(claseinstanciada.Sumar()); //Suma los datos que ingresa el usuario
}
exports.Resta = function(req, res){
	let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
	res.json(claseinstanciada.Resta()); //Resta los datos que ingresa el usuario
}
exports.Mul = function(req, res){
	let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
	res.json(claseinstanciada.Mul()); //Multiplica los datos que ingresa el usuario
}
exports.Div = function(req, res){
	let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
	res.json(claseinstanciada.Div()); //Divide los datos que ingresa el usuario
}