// Controlar el boton scroll up

document.getElementById('button-up').addEventListener('click',scrollUp)

function scrollUp(){

    var obtenerScrollPantalla = document.documentElement.scrollTop || document.body.scrollTop; //obtiene el Scroll de la pantalla o del body

    if(obtenerScrollPantalla>0){

        window.requestAnimationFrame(scrollUp); //Esto es para darle animacion al subir la pagina
        window.scrollTo(0,obtenerScrollPantalla - (obtenerScrollPantalla/30)); //Para la velocidad al subir la pagina
    }
}

let buttonUp = document.getElementById('button-up');

    window.onscroll = function(){
            let scroll = document.documentElement.scrollTop;  

            if(scroll > 250){
                //alert(scroll);  Solo Para buscar el punto en medida donde se posicione del scroll 

                buttonUp.style.transform = 'scale(1)'
            }else { 
                buttonUp.style.transform = 'scale(0)'
            }

    }