  //Función prevent Default para cancelar los eventos por defecto
  function functionSubmit(e){
    e.preventDefault();
  }

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
   localStorage.setItem("nombre", nombre);
   localStorage.setItem("correo", correo);
   localStorage.setItem("contraseña", contraseña);
   window.location.href = "index.html";
   
   
}
