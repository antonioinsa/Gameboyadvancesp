let pantalla = document.getElementById("pantallavisible");



//let select = document.getElementById("off");


document.addEventListener("click", (e)=>){

    if(e.target.id == 'on') {

        pantalla.style.backgroundImage="url('./img/gif.gif')";


    } else if(e.target.id == 'off') {

        pantalla.style.backgroundImage="url('./img/playingwithpower.gif')";
        
    }

}

// Función para encender la consola al pulsar Start
//Introduzco un gift en la pantalla + Luz verde 
//function change() {
//    
//}
//
////Función para apagar la consola al pulsar Select
////La pantalla vuelve a su estado inicial + Luz vuelve a su estado inicial
//function tooff() {
//    if( contador == 1) {
//        screen.style.backgroundImage='url(./img/playingwithpower.gif)'
//        light.style.background='linear-gradient(to bottom, rgb(134, 130, 130), rgb(175, 165, 165))'; 
//        contador = 0;
//    }
//}
//
//// Evento click para el boton Start con Id('on')
//button.addEventListener('click', change);
//
////Evento click para el boton Select con id('off')
//select.addEventListener('click', tooff);