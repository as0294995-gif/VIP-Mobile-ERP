document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.querySelector(".search-box input");
const rows = document.querySelectorAll("tbody tr");
const newPurchaseBtn = document.querySelector(".new-purchase");

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

rows.forEach(row => {

row.style.display = row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

newPurchaseBtn.addEventListener("click", () => {

alert("سيتم إضافة شاشة إنشاء فاتورة شراء كاملة في المرحلة القادمة.");

});

});
