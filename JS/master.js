let form = document.querySelector("form");
let nombre = document.querySelector("#nombre");
let mensaje1 = document.querySelector(".mensaje-1");
let formulario = document.querySelector(".formulario");
let mensaje2 = document.querySelector(".mensaje-2")
let apellido = document.querySelector("#apellido")
let correo = document.querySelector("#correo")
let mensaje3 = document.querySelector(".mensaje-3")
let contraseña = document.querySelector("#contraseña")
let mensaje4 = document.querySelector(".mensaje-4");

form.addEventListener("submit", function(event){
    let errores = [];
    let regex = /^[a-zA-Z\s]+$/;
    let regex2 = /@/;

    if(nombre.value == ""){
        event.preventDefault();
        mensaje1.style.display = "block";
        mensaje1.innerHTML = "Este campo es obligatorio";
        mensaje1.style.color = "red";
        formulario.style.border = "3px solid red";
      
    }
    else if(!regex.test(nombre.value)){
        event.preventDefault();
        mensaje1.style.display = "block";
        mensaje1.innerHTML = "No se permiten caracteres especiales ni números";
        mensaje1.style.color = "red";
        formulario.style.border = "3px solid red";
     
    }


    if(apellido.value == ""){
        event.preventDefault();
        mensaje2.style.display = "block";
        mensaje2.innerHTML = "Este campo es obligatorio";
        mensaje2.style.color = "red";
        formulario.style.border = "3px solid red";
        
    }
    else if(!regex.test(apellido.value)){
        event.preventDefault();
        mensaje2.style.display = "block";
        mensaje2.innerHTML = "No se permiten caracteres especiales ni números";
        mensaje2.style.color = "red";
        formulario.style.border = "3px solid red";
       
    }


    if(correo.value == ""){
        event.preventDefault();
        mensaje3.style.display = "block";
        mensaje3.innerHTML = "Este campo es obligatorio";
        mensaje3.style.color = "red";
        formulario.style.border = "3px solid red";
       
    }
    else if(!regex2.test(correo.value)){
        event.preventDefault();
        mensaje3.style.display = "block";
        mensaje3.innerHTML = "correo invalido";
        mensaje3.style.color = "red";
        formulario.style.border = "3px solid red";
       
    }

    if(contraseña.value == ""){
        event.preventDefault();
        mensaje4.style.display = "block";
        mensaje4.innerHTML = "Este campo es obligatorio";
        mensaje4.style.color = "red";
        formulario.style.border = "3px solid red";
       
    }
    else if(contraseña.value.length < 8){
        event.preventDefault();
        mensaje4.style.display = "block";
        mensaje4.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        mensaje4.style.color = "red";
        formulario.style.border = "3px solid red";
       
    }

})

// nombre.addEventListener("blur", function(){
//     let regex = /^[a-zA-Z\s]+$/;

//     if(nombre.value == ""){
//         mensaje1.style.display = "block";
//         mensaje1.innerHTML = "Este campo es obligatorio";
//         mensaje1.style.color = "red";
//         formulario.style.border = "3px solid red";
//     }
//     else if(!regex.test(nombre.value)){
//         mensaje1.style.display = "block";
//         mensaje1.innerHTML = "No se permiten caracteres especiales ni números";
//         mensaje1.style.color = "red";
//         formulario.style.border = "3px solid red";
//     }
//     else{
//         mensaje1.style.display = "none";
//         formulario.style.border = "none";
//     }
// })