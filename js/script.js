//Función prevent Default para cancelar los eventos por defecto
function functionSubmit(e){
  e.preventDefault();
}
  //modal
  $(document).ready(function(){
    $('.modal').modal();
  });
  

//Declaración de variables
let nombre="", correo="", contraseña=0, usuario, csesion= "<button id='' type='submit' onclick='cerrarsesion()' class='colordetextonegro'>Cerrar sesión</button>";



//funcion capta datos y refresca
function captar(){
   nombre = document.getElementById('nombre');
   correo = document.getElementById('correo');
   contraseña = document.getElementById('contraseña').value;
   localStorage.setItem("nombre", nombre.value);
   localStorage.setItem("nombreSave", nombre.value);
   localStorage.setItem("correo", correo.value);
   localStorage.setItem("contraseña", contraseña.value);
   window.location.href = "index.html";
  
   
}



  function login(){
    usuario = localStorage.getItem("nombre");

    if(usuario != ""){
    document.querySelector("#usuario").innerHTML = usuario;
    document.querySelector("#csesion").innerHTML = csesion;
  }
  }
  login()

  function cerrarsesion(){
    localStorage.removeItem("nombre");
   window.location.href = "index.html";

  }

  function iniciar(){
    let correoLs, contraseñaLs, nombreSave, correoIns, contraseñaIns;

    correoLs = localStorage.getItem("correo");
    contraseñaLs = localStorage.getItem("contraseña");
    nombreSave = localStorage.getItem("nombreSave");

    correoIns = document.getElementById('correo');
    contraseñaIns = document.getElementById('contraeña');

    if (correoIns == correoLs && contraseñaIns == contraseñaLs){
      login()
    }

  }