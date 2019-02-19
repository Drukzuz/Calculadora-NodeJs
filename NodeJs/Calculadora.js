class Calculadora{
	constructor(_numero1, _numero2)
	{
		this.Numero1 = _numero1; //estraccion del valor numero1
		this.Numero2 = _numero2; //estraccion del valor numero2
	}
	Sumar()
	{
		return parseInt(this.Numero1)+parseInt(this.Numero2); //Proceso matematico
	}
	SumarAsinc()
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
	RestaAsinc()
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
	MulAsinc()
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
	DivAsinc()
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
	ParteAsinc()
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
	SumarAjax()
	{
		var objetoaenviar = this;
		//Return a new promise
		return new Promise(function(resolve,reject){
		//Do the usual xhr stuff

			try {
				var xhr = new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else
					{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
		RestarAjax()
	{
		var objetoaenviar = this;
		//Return a new promise
		return new Promise(function(resolve,reject){
		//Do the usual xhr stuff

			try {
				var xhr = new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else
					{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
		DivAjax()
	{
		var objetoaenviar = this;
		//Return a new promise
		return new Promise(function(resolve,reject){
		//Do the usual xhr stuff

			try {
				var xhr = new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Adividir');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else
					{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
		MulAjax()
	{
		var objetoaenviar = this;
		//Return a new promise
		return new Promise(function(resolve,reject){
		//Do the usual xhr stuff

			try {
				var xhr = new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Amultiplicar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else
					{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}

let G_Numero1 = 0;
let G_Numero2 = 0;
let G_Signo = "";

//Click a los numeros
function Dig(num){
	document.getElementById("resultado").value = document.getElementById("resultado").value+num; //Muestra los numeros digitados en pantalla
}

//Click al signo
function Signo(sig){
	G_Numero1 = document.getElementById("resultado").value; //Guarda el primer numero digitado
	G_Signo = sig; //Guarda el signo
	document.getElementById("resultado").value = ""; //Borra la pantalla
}

//Click al igual
function Proceso(){
G_Numero2 = document.getElementById("resultado").value;
let instancia = new Calculadora(G_Numero1,G_Numero2);
switch(G_Signo)
{
	case "+":
		instancia.SumarAjax().then(function(response)
		{
			document.getElementById("resultado").value =  response;
		},function(err)
		{
			document.getElementById("resultado").value = "Error";
		}
		)
	break;
	case "-":
		instancia.RestarAjax().then(function(response)
		{
			document.getElementById("resultado").value =  response;
		},function(err)
		{
			document.getElementById("resultado").value = "Error";
		}
		)
	break;
	case "*":
		instancia.MulAjax().then(function(response)
		{
			document.getElementById("resultado").value =  response;
		},function(err)
		{
			document.getElementById("resultado").value = "Error";
		}
		)
	break;
	case "/":
		instancia.DivAjax().then(function(response)
		{
			document.getElementById("resultado").value =  response;
		},function(err)
		{
			document.getElementById("resultado").value = "Error";
		}
		)
	break;
}
}

function Delete(){ //Elimina los datos que se habian ingresado
	let G_Numero1 = 0; //Eliminar el primer numero
	let G_Numero2 = 0; //Eliminar el segundo numero
	let G_Signo = "";  //Eliminar el signo
	document.getElementById("resultado").value = "";
}

function Bac(){ //Borrar sólo el último número escrito
         x=document.getElementById("resultado").value; 
         cifras=x.length; //hayar la cantidad de caracteres en pantalla
         x=x.substr(0,cifras-1); //quitar el ultimo caracter
         document.getElementById("resultado").value=x; //mostrar resultado en pantalla	 
         }