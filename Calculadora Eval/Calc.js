var n1 = document.getElementById("n1_txt");
var n2 = document.getElementById("n2_txt");
var op = "";
var res =0;
var button = document.getElementById("somar_btn");
var div = document.querySelector("#res_div")
button.addEventListener("click", somar)
function somar(){
op = document.getElementById("op_sel").value;
var a = Number(n1.value);
var b = Number(n2.value);
if( op == "%"){
    res = (a * b)/100;
}else{
    res = eval(a+op+b);

}
div.innerHTML = "<strong>"+res+"</strong>";
}