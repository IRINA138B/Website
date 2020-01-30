
var i;


function one(){
var t=document.getElementById('t').alt;
var price=document.getElementById('buy').name;
localStorage.setItem("text",t);
localStorage.setItem("p",price);
i=document.getElementById('count').value;
localStorage.setItem("ir",i);

}


var is;


function on(){
var read=document.getElementById('read').alt;
var prices=document.getElementById('buy1').name;
localStorage.setItem("texts",read);
localStorage.setItem("ps",prices);
is=document.getElementById('count1').value;
localStorage.setItem("irs",is);

}

function ShowHideDiv() {
            var chkYes = document.getElementById("chkYes");
            var dvPassport = document.getElementById("dvPassport");
            dvPassport.style.display = chkYes.checked ? "block" : "none";
       }


var s;
var ss;

var i=parseInt(localStorage.getItem("ir"));
var is= parseInt(localStorage.getItem("irs"));


function con(){

}
var price;
var prices;
function im(){

if(i>0){

s = document.getElementById("s");
            s.style.display = (s.style.display == "none") ? "block" : "none";
var t= localStorage.getItem("text");
price= parseInt(localStorage.getItem("p"));
document.getElementById('out0').innerHTML =t;
document.getElementById('out1').innerHTML ="Ціна: "+price+" грн";
document.getElementById('out2').innerHTML ="Кількість: "+i+" шт";
}


if (is>0){

ss = document.getElementById("ss");
            ss.style.display = (ss.style.display == "none") ? "block" : "none";
var ts= localStorage.getItem("texts");
prices= parseInt(localStorage.getItem("ps"));

document.getElementById('out01').innerHTML =ts;
document.getElementById('out11').innerHTML ="Ціна: "+prices+" грн";
document.getElementById('out21').innerHTML ="Кількість: "+is+" шт";
}

}

function cancel(){
 i=0;
document.getElementById('out2').innerHTML ="Кількість: "+i+" шт";
var delit= document.getElementById('load');
s.style.display = (s.style.display == "block") ? "none" : "block";

localStorage.setItem("ir",i);
 


}

function cancel1(){
is=0;
document.getElementById('out21').innerHTML ="Кількість: "+is+" шт";
 ss.style.display = (ss.style.display == "block") ? "none" : "block";
localStorage.setItem("irs",is);


}



function second(){
let x1=form1.nomer.value;
if(x1=="")
   alert ("Ви не ввели номер телефону");

if (isNaN(i)) i = 0;
if (isNaN(is)) is = 0;
if (isNaN(price)) price = 0;
if (isNaN(prices)) prices = 0;

vartist=i*price+is*prices;

if(document.getElementById('chkYes').checked){
let del1= parseInt(form1.chkYes.value);
vartist= vartist+del1;
}
else if(document.getElementById('chkNo').checked) {
let del2=parseInt(form1.chkNo.value);
vartist= vartist+del2;
}

document.getElementById('output').innerHTML =vartist+"грн";

}

