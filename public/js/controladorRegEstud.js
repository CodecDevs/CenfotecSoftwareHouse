'use strict';
let botonRegEstud = document.querySelector('#btnRegEstud');

botonRegEstud.addEventListener('click' , obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputDireccion = document.querySelector('#txtDireccion');
let inputTelefono = document.querySelector('#txtTelefono');
let inputEmail = document.querySelector('#txtEmail');
let inputCedula = document.querySelector('#txtCedula');
let inputCarrera = document.querySelector('#txtCarrera');
let inputMaterias = document.querySelector('#txtMateriasAprob');
let inputEmergNombre = document.querySelector('#txtContactEmergNombre');
let inputEmergApellido = document.querySelector('#txtContactEmergApellido');
let inputEmergTelefono = document.querySelector('#txtContactEmergTelefono');
// let inputEdad = document.querySelector('#txtEdad');
// let inputContrasenna = document.querySelector('#txtContrasenna');
// let inputConfirmacion = document.querySelector('#txtConfirmacion');


function obtenerDatos(){
    let infoEstud =[];
    let bError = false;

    let sNombre = inputNombre.value;    
    let sApellido = inputApellido .value;
    let sDireccion = inputDireccion.value; 
    let sTelefono = Number(inputTelefono.value);
    let sEmail = inputEmail.value;
    let sCedula = Number(inputCedula.value); 
    let sCarrera = inputCarrera.value; 
    let sMaterias = inputMaterias.value; 
    let sEmergNombre = inputEmergNombre.value; 
    let sEmergApellido = inputEmergApellido.value; 
    let sEmergTelefono = Number(inputEmergTelefono.value); 
    // let nEdad = Number(inputEdad.value);
    // let sContrasenna = inputContrasenna.value;
    // let sConfirmacion = inputConfirmacion.value;



    infoEstud.push(sNombre, sApellido, sDireccion, sTelefono, sEmail, sCedula, sCarrera, sMaterias, sEmergNombre, sEmergApellido, sEmergTelefono);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        registrarEstud(infoEstud);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        imprimirListaEstud();
        limpiarFormulario();
    }
    
};
function imprimirListaEstud(){
    let listaEstud = obtenerListaEstud();
    let tbody = document.querySelector('#tblEstud tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstud.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        let cDireccion = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cEmail = fila.insertCell();
        let cCedula = fila.insertCell();
        let cCarrera = fila.insertCell();
        let cMaterias = fila.insertCell(); 
        let cEmergNombre = fila.insertCell(); 
        let cEmergApellido = fila.insertCell(); 
        let cEmergTelefono = fila.insertCell(); 


        cNombre.innerHTML = listaEstud[i][0];
        cApellido.innerHTML = listaEstud[i][1];
        cDireccion.innerHTML = listaEstud[i][2];
        cTelefono.innerHTML = listaEstud[i][3];
        cEmail.innerHTML = listaEstud[i][4];
        cCedula.innerHTML = listaEstud[i][5];
        cCarrera.innerHTML = listaEstud[i][6];
        cMaterias.innerHTML = listaEstud[i][7];
        cEmergNombre.innerHTML = listaEstud[i][8];
        cEmergApellido.innerHTML = listaEstud[i][9];
        cEmergTelefono.innerHTML = listaEstud[i][10];
    }

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Primer nombre 
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error_input');
        bError = true;
    }else{
        inputNombre.classList.remove('error_input');
    }
    //Validación del Primer Apellido 
    if(inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value)==false) ){
        inputApellido.classList.add('error_input');
        bError = true;
    }else{
        inputApellido.classList.remove('error_input');
    }
    //Validación del correo
    if(inputEmail.value == ''){
        inputEmail.classList.add('error_input');
        bError = true;
    }else{
        inputEmail.classList.remove('error_input');
    }
    //Validación del teléfono
    if(inputTelefono.value == ''){
        inputTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error_input');
    }
    //Validación del Cédula
    if(inputCedula.value == ''){
        inputCedula.classList.add('error_input');
        bError = true;
    }else{
        inputCedula.classList.remove('error_input');
    }
    // //Validación de la cédula  *****este no me funciona****
    // if(inputCedula.value == '' || (regexSoloNumeros.test(inputCedula.value) == false) || Number(inputCedula.value) < Number(inputEdad.min)  || Number(inputEdad.value) > Number(inputCedula.max)){
    //     inputCedula.classList.add('error_input');
    //     bError = true;
    // }else{
    //     inputCedula.classList.remove('error_input');
    // }
     //Validación del Primer nombre de emergencia
     if(inputEmergNombre.value == '' || (regexSoloLetras.test(inputEmergNombre.value)==false) ){
        inputEmergNombre.classList.add('error_input');
        bError = true;
    }else{
        inputEmergNombre.classList.remove('error_input');
    }
    //Validación del teléfono de emergencia
    if(inputEmergTelefono.value == ''){
        inputEmergTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputEmergTelefono.classList.remove('error_input');
    }
    

    //Validación de la contraseña

    // if(inputContrasenna.value == ''){
    //     inputContrasenna.classList.add('error_input');
    //     bError = true;
    // }else{
    //     inputContrasenna.classList.remove('error_input');
    // }

    // if(inputContrasenna.value != inputConfirmacion.value){
    //     inputContrasenna.classList.add('error_input');
    //     inputConfirmacion.classList.add('error_input');
    //     bError = true;
    // }else{
    //     inputContrasenna.classList.remove('error_input');
    //     inputConfirmacion.classList.remove('error_input');
    // }

    return bError;
};

function limpiarFormulario(){
    
        inputNombre.value = '';
        inputApellido.value = '';
        inputDireccion.value = '';
        inputTelefono.value = '';
        inputEmail.value = '';
        inputCedula.value = '';
        inputCarrera.value = '';
        inputMaterias.value = '';
        inputEmergNombre.value = '';
        inputEmergApellido.value = '';
        inputEmergTelefono.value = '';   
    }       
