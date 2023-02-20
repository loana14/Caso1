const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar tildes.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

numeroRandom = () =>{
    const numeroRandom = document.getElementById("random");
    let aleatorio = Math.floor(Math.random()*999999);
    numeroRandom.value = aleatorio;
  };

  window.addEventListener('load', () => {
    numeroRandom();
  })

  function validar(e){
    console.log(e)
    let email=document.getElementById("email").value;
    let Eemail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!Eemail.test(email)){
        alert("Correo no valido");
    }
    else{
      alert("Registro correcto")
    }
}

function habilitar(){
  let nom = document.getElementById("nombre").value;
  let ema = document.getElementById("email").value;
  let val = 0;

  if(nom == ""){
    val++;
  }
  if(ema == ""){
    val++;
  }
  if(val == 0){
    document.getElementById("button").disabled = false;
  }
  else{
    document.getElementById("button").disabled = true;
  }
}
document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
