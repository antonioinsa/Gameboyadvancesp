
let pantalla = document.getElementById("pantallavisible");
let ledverde = document.getElementById("luzverde")
let contador = 0;

document.addEventListener("click", (e)=>{

    if (e.target.id === 'on') {

        pantalla.style.backgroundImage = "url('img/gif.gif')";

        if (contador = 1) {ledverde.style.background = 'green'};
    


    } else if (e.target.id === 'off') {

        pantalla.style.backgroundImage = "url('img/marioaplauso.gif')";
        contador++
        if (contador >1) {ledverde.style.background = "linear-gradient(to bottom, rgb(134, 130, 130), rgb(175, 165, 165))"};
    
    };

});
