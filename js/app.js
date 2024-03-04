function encripDesencript(option){
    var textoInicial = document.getElementById('caja-input').value;
    var textoFinal = '';  
    var expRegular = /[0-9A-Zá-úÁ-Ú?!))$&.'!"@&%<>!#$%&/()=]/g; 

    if (option === "encrypt") {
        if(textoInicial != ""){
            if(expRegular.test(textoInicial)){
                Swal.fire({
                    title: 'Advertencia',
                    text: 'No puedes utilizar letras con acentos ni caracteres especiales',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
            }else{
                for (var i=0; i < textoInicial.length; i++)
                {
                    textoInicial[i] == 'a' ? textoFinal += 'ai' :
                    textoInicial[i] == 'e' ? textoFinal += 'enter' :
                    textoInicial[i] == 'i' ? textoFinal += 'imes' :
                    textoInicial[i] == 'o' ? textoFinal += 'ober' :
                    textoInicial[i] == 'u' ? textoFinal += 'ufat' : textoFinal += textoInicial[i];                    
                } 
                //alert(textoFinal);      
                document.getElementById("muñeco").style.display = 'none';
                document.querySelector('h1').style.display =  'none';
                document.getElementById("texto-ingresa").style.display =  'none';
                document.getElementById("text-output").style.display =  'block';
                document.getElementById("text-output").innerHTML =  textoFinal;
                document.getElementById("caja-auxiliar").innerHTML =  textoFinal;
            }
        }else{
            Swal.fire({
                title: 'Advertencia',
                text: 'No dejar la caja de texto vacía',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
        }
    } else {
        if(textoInicial != ""){
            if(expRegular.test(textoInicial)){
                console.log("a");
            }else{
                for (var i=0; i < textoInicial.length; i++)
                {
                    textoFinal += textoInicial[i] == 'a' && textoInicial[i + 1] == 'i' ? (i++, 'a') :
                     textoInicial[i] == 'e' && textoInicial[i + 1] == 'n' && textoInicial[i + 2] == 't' && textoInicial[i + 3] == 'e' && textoInicial[i + 4] == 'r' ? (i += 4, 'e') :
                     textoInicial[i] == 'i' && textoInicial[i + 1] == 'm' && textoInicial[i + 2] == 'e' && textoInicial[i + 3] == 's' ? (i += 3, 'i') :
                     textoInicial[i] == 'o' && textoInicial[i + 1] == 'b' && textoInicial[i + 2] == 'e' && textoInicial[i + 3] == 'r' ? (i += 3, 'o') :
                     textoInicial[i] == 'u' && textoInicial[i + 1] == 'f' && textoInicial[i + 2] == 'a' && textoInicial[i + 3] == 't' ? (i += 3, 'u') :
                     textoInicial[i];                    
                } 
                //alert(textoFinal);  
                document.getElementById("muñeco").style.display = 'none';
                document.querySelector('h1').style.display =  'none';
                document.getElementById("texto-ingresa").style.display =  'none';  
                document.getElementById("text-output").style.display =  'block'; 
                document.getElementById("text-output").innerHTML =  textoFinal;    
                document.getElementById("caja-auxiliar").innerHTML =  textoFinal;
            }
        }else{
            Swal.fire({
                title: 'Advertencia',
                text: 'No dejar la caja de texto vacía',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
        }
    }
}

function copyText(){
    navigator.clipboard.writeText( document.getElementById("text-output").innerHTML)
  .then(() => {
    //console.log('Texto copiado al portapapeles')
    document.getElementById("texto-copiado").style.display = "block";    
    document.getElementById("btn-aux-copy").innerHTML = "Copiado";
    document.getElementById("btn-aux-copy").style.background = "#62b062";
    document.getElementById("btn-aux-copy").style.border = "1px solid #62b062";
    setTimeout(function(){ 
        document.getElementById("texto-copiado").style.display = "none";
        document.getElementById("btn-aux-copy").innerHTML = "Copiar";
        document.getElementById("btn-aux-copy").style.background = "rgb(170, 169, 169)";
        document.getElementById("btn-aux-copy").style.border = "1px solid rgb(170, 169, 169)";
    }, 2000);
  })
  .catch(err => {
    //console.error('Error al copiar al portapapeles:', err)
    document.getElementById("texto-copiado").style.display = "none";
  })
}