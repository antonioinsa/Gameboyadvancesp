
let pantalla = document.getElementById("pantallavisible");
let ledverde = document.getElementById("luzverde");
let ledambar = document.getElementById("luzambar");
let contador = 0;


document.addEventListener("click", (e) => {

    if (e.target.id === 'on') {

        pantalla.style.backgroundImage = "url('img/startup.gif')";

        ledverde.style.background = 'green';

        document.addEventListener("click", (e) => {

            if ((contador = 1) && (e.target.id === 'a')) {

                pantalla.style.backgroundImage = "url('img/supermariobros.gif')";

                ledambar.style.background = 'orange';
            };

        });
    }

    else if (e.target.id === 'off') {

        pantalla.style.backgroundImage = "url('img/mariogorrafin.gif')";

        setTimeout(function () {
            location.reload();
        }, 2000);
    };

});