// Sales Validation
/*if and AND*/


let itemName = "Ipad";
let buyerName = "Martha"
let amountDue = 15000

if(itemName.length > 0 && amountDue ===15000){
    let isValid = itemName.length > 0 && amountDue.toString().length >= 5 && buyerName.length >= 2;

    console.log(isValid)
}