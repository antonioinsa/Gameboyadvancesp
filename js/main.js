
let pantalla = document.getElementById("pantallavisible");

document.addEventListener("click", (e)=>{

    if (e.target.id === 'on') {

        pantalla.style.backgroundImage = "url('img/gif.gif')";


    } else if (e.target.id === 'off') {

        pantalla.style.backgroundImage = "url('img/playingwithpower.gif')";
        
    };

});
