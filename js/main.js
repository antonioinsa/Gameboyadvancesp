
let pantalla = document.getElementById("pantallavisible");
let ledverde = document.getElementById("luzverde");
let ledambar = document.getElementById("luzambar");
let contador = 0;


document.addEventListener("click", (e)=>{

    if (e.target.id === 'on') {

        pantalla.style.backgroundImage = "url('img/startup.gif')";
       

        if (contador = 1) {ledverde.style.background = 'green'};
    

    } else if (e.target.id === 'off') {

        pantalla.style.backgroundImage = "url('img/mariogorrafin.gif')";
        contador++;
        if (contador >1) {ledverde.style.background = "linear-gradient(to bottom, rgb(134, 130, 130), rgb(175, 165, 165))"};
        
    };


});

document.addEventListener("click", (e)=>{

    if (e.target.id === 'a') {

        pantalla.style.backgroundImage = "url('img/supermariobros.gif')";
       

        if (contador = 1) {ledambar.style.background = 'orange'};
    

    } else if (e.target.id === 'off') {

        contador++;
        if (contador >1) {ledambar.style.background = "linear-gradient(to bottom, rgb(134, 130, 130), rgb(175, 165, 165))"};
        
    };


});