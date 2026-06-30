document.addEventListener("DOMContentLoaded", () => {

const modal = document.querySelector(".customer-modal");
const addBtn = document.querySelector(".add-customer");
const saveBtn = document.querySelector(".save-btn");
const search = document.querySelector(".search-box input");

addBtn.addEventListener("click", () => {

modal.style.display = "flex";

});

window.addEventListener("click", (e) => {

if(e.target === modal){

modal.style.display = "none";

}

});

saveBtn.addEventListener("click", () => {

alert("سيتم حفظ العميل وربطه بقاعدة البيانات في المرحلة القادمة.");

modal.style.display = "none";

});

search.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

row.style.display = row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

document.querySelectorAll(".edit-btn").forEach(btn=>{

btn.onclick = ()=>{

alert("ميزة تعديل العميل سيتم إضافتها لاحقًا.");

};

});

document.querySelectorAll(".delete-btn").forEach(btn=>{

btn.onclick = ()=>{

if(confirm("هل تريد حذف هذا العميل؟")){

btn.closest("tr").remove();

}

};

});

});
