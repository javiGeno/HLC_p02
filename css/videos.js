var boton=document.getElementById("maxi");
boton.addEventListener('click', maximizar, false); 
            
function maximizar() { 

   

    if (boton.innerText=='maximizar')
    {
        document.getElementById("videoHTML").style.height='100%'; 
        document.getElementById("videoHTML").style.width='100%'; 
        document.getElementById("videoHTML").style.margin='0%';
        boton.innerText='minimizar';
    }
    else{

        document.getElementById("videoHTML").style.height='20%'; 
        document.getElementById("videoHTML").style.width='30%'; 
        document.getElementById("videoHTML").style.marginLeft='35%';
        document.getElementById("videoHTML").style.marginTop='5%';

      

        boton.innerText='maximizar';

    }
   
    
}