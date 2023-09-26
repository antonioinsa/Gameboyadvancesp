
let pantalla = document.getElementById("pantallavisible");
let ledverde = document.getElementById("luzverde");
let ledambar = document.getElementById("luzambar");
let contador = 0;
let audio1 = new Audio('./audio/startup.mp3');
let audio2 = new Audio('./audio/supermariobros.mp3');

document.addEventListener("click", (e) => {

    if (e.target.id === 'on') {
        audio2.pause();
        pantalla.style.backgroundImage = "url('img/startup.gif')";
        ledverde.style.background = 'green';
        if ((ledverde = true) && (contador < 1)) {
            audio1.play();
        };

        document.addEventListener("click", (e) => {
            if ((contador = 1) && (e.target.id === 'a')) {
                audio1.pause();
                pantalla.style.backgroundImage = "url('img/supermariobros.gif')";
                ledambar.style.background = 'orange';
                if ((ledambar = true) && (contador = 1)) {
                    audio2.play();
                }
                contador = 0;
            };
        });
    } else if ((e.target.id === 'off') && (contador > 0)) {
        pantalla.style.backgroundImage = "url('img/mariogorrafin.gif')";
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
});