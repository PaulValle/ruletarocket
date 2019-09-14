const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click",girar);

dinero = 50;

// Get the modal
var modal1 = document.getElementById("pelea1");
var modal2 = document.getElementById("pelea2");
var modal3 = document.getElementById("pelea3");
var modal4 = document.getElementById("pelea4");
var modal5 = document.getElementById("pelea5");
var modal6 = document.getElementById("pelea6");
var modal7 = document.getElementById("pelea7");
var modal8 = document.getElementById("pelea8");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*
btn.onclick = function() {
  modal.style.display = "block";
}
*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function girar(){
    
    	let rand = Math.random()*7200; 
    	//sumarPuntos(-20);
        calcular(rand);
  
}
function sumarPuntos(p){
	//dinero += p;
   // document.querySelector("#dinero").innerHTML = "Dinero: $" + dinero + "USD";
}



function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    var audio = new Audio('../img/rocket.wav');
    audio.play();
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 45:
             modal1.style.display = "block";
    	    //alert("Pierdes una piedra Sinnoh!");
    	    break;
    	case valor > 45 && valor <= 90:
             modal2.style.display = "block";
    	    //alert("Pierdes 5 pokeballs!");
    	    //sumarPuntos(20);
    	    break;
        case valor > 90 && valor <= 135:
             modal3.style.display = "block";
            //alert("Transfiere un rattata");
            //sumarPuntos(5);
            break; 
        case valor > 135 && valor <= 180:
             modal4.style.display = "block";
            //alert("Pierdes 5 ultraballs!");
            //sumarPuntos(50);
            break;
        case valor > 180 && valor <= 225:
             modal5.style.display = "block";
            //alert("Transfiere un pidgey");
            //sumarPuntos(100);
            break;
        case valor > 225 && valor <= 270:
             modal6.style.display = "block";
            //alert("Pierdes 5 greatballs!");
            break;
        case valor > 270 && valor <= 315:
             modal7.style.display = "block";
            //alert("Transfiere un zubat");
            //sumarPuntos(70);
            break;
        case valor > 315 && valor <= 360:
             modal8.style.display = "block";
            //alert("No puedes usar escudos en la batalla");
           // sumarPuntos(10);
            break;
    }},5000);
}