
  //modal
  $(document).ready(function(){
    $('.modal').modal();
  });
  

//Declaración de variables
let nombre="", correo="", contraseña=0;



//funcion capta datos y refresca
function captar(){
   nombre = document.getElementById('nombre');
   correo = document.getElementById('correo');
   contraseña = document.getElementById('contraseña').value;
   localStorage.setItem("nombre", nombre.value);
   localStorage.setItem("correo", correo.value);
   localStorage.setItem("contraseña", contraseña.value);
   window.location.href = "index.html";
  
   
}



  function login(){
    let usuario = localStorage.getItem("nombre")

    if(usuario != "")
    document.querySelector("#usuario").innerHTML = usuario;
  }
  login()