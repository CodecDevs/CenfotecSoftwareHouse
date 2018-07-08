'use strict';
let listaEstud = [];

function registrarEstud(paInfoEstud){
    listaEstud.push(paInfoEstud);
}
function obtenerListaEstud(){
    return listaEstud;
}

function RegistrarEstud(paInfoEstud){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
			Nombre : listaEstud[0],
	        Apellido : listaEstud[1],
	        Direccion : listaEstud[2],
	        Telefono :  listaEstud[3],
	        Email :  listaEstud[4],
	        Cedula : listaEstud[5],
	       	Carrera : listaEstud[6],
	        Materias :  listaEstud[7],
	        NombreEmergencia :  listaEstud[8],
	        ApellidoEmergencia :  listaEstud[9],
	        TelefonoEmergencia :  listaEstud[10]
    
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
