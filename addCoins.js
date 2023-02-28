let currency = new Currency();

let inputNewCoins = document.getElementById("number-of-coins");
let typeCurrency= document.getElementById("type-of-currency");

function buttonAddCoins(){
 if(typeCurrency.value.toString() === "Платиновые монеты"){

 }
 else if(typeCurrency.value.toString() === "Золотые монеты"){

 }
 else if(typeCurrency.value.toString() === "Серебряные монеты"){

 }
 else{
     alert("Что-то не то");
 }
}