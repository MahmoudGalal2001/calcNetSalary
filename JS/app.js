let input = document.querySelectorAll("input")
// let button = document.querySelector("button")
let span = document.querySelector("span")


function getNetSalary(){

    let gross = input[0].value
    let tax = input[1].value
    let ins = input[2].value
    let bonus = input[3].value

    let insCost = +gross * (+ins/100);
    let costAfterIns = +gross - +insCost;
    let taxCost = +costAfterIns * (+tax/100);
    let grossAfterIsandTax = +costAfterIns - +taxCost;
    let netSalary = +grossAfterIsandTax + +bonus;

    span.innerText = netSalary;
}
for(let i=0; i< input.length;i++){
input[i].addEventListener("keyup",getNetSalary );
}