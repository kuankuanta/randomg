let rnd=document.getElementById("result");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const x=document.getElementById("myNumber");




function rasgele (){
   // var defaultVal = x.defaultValue;
  var currentVal = x.value;
   return rnd.innerHTML=Math.floor(currentVal*Math.random());
    
}
// btn1.addEventListener("click",rasgele());
btn1.addEventListener("click",rasgele);

/* function temizle () {document.getElementById("result2").innerHTML="Temizlendi";
}
btn2.addEventListener("click",temizle); */
