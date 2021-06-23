var values = [document.getElementById("n1_txt"),document.getElementById("n2_txt") ];
var op = "";
var res = 0;
var button = document.getElementById("somar_btn");
var div = document.querySelector("#res_div")
button.addEventListener("click", somar)
function somar(){
op = document.getElementById("op_sel").value;
var a = [Number(values[0].value), Number(values[1].value) ];
if( op == "%"){
    res = (a[0] * a[1])/100;
}else{
    res = eval(a[0]+op+a[1]);
}
div.innerHTML = "<strong>"+res+"</strong>";
}