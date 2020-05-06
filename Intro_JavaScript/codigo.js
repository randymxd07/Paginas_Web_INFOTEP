        const inputColor = document.querySelector("#color");
        const btnCambiarColor = document.querySelector("#cambiar_color");

        btnCambiarColor.addEventListener('click', () =>{

            let color = inputColor.value;

            if(color == ''){
                alert("Error, campo de texto vacío");
            }
            else{
               CambiarColorFondo(color); 
            }

        });

        function CambiarColorFondo(color){
            document.body.style.background = color;
        }

