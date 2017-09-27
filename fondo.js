

   var numero = 0;
 
   function cambiar() 
   {
      if(numero==0){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
         numero = 1;
      }
      else if(numero==1){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
         numero = 0;
      }
   }
 
   setInterval("cambiar()",5000);

