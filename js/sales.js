document.addEventListener("DOMContentLoaded", () => {

const table=document.getElementById("salesTable");

const discount=document.getElementById("discount");

const paid=document.getElementById("paid");

const total=document.getElementById("totalPrice");

const remaining=document.getElementById("remaining");

function calculate(){

let totalPrice=0;

table.querySelectorAll("tr").forEach(row=>{

const qty=row.querySelector("input");

if(!qty) return;

const price=parseFloat(row.children[2].innerText)||0;

const totalCell=row.children[3];

const rowTotal=price*parseInt(qty.value||1);

totalCell.innerText=rowTotal.toLocaleString();

totalPrice+=rowTotal;

});

const discountValue=parseFloat(discount.value)||0;

const finalTotal=totalPrice-discountValue;

total.innerText=finalTotal.toLocaleString()+" جنيه";

const paidValue=parseFloat(paid.value)||0;

remaining.innerText=(paidValue-finalTotal).toLocaleString()+" جنيه";

}

table.addEventListener("
