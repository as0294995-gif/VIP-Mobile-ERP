document.addEventListener("DOMContentLoaded", () => {

const modal = document.querySelector(".product-modal");
const addBtn = document.querySelector(".add-product");
const saveBtn = document.querySelector(".save-btn");
const search = document.getElementById("search");

let products = [];

addBtn.addEventListener("click", () => {

modal.style.display = "flex";

});

window.addEventListener("click", (e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

saveBtn.addEventListener("click",()=>{

alert("سيتم ربط حفظ المنتجات بقاعدة البيانات في المرحلة القادمة.");

modal.style.display="none";

});

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const rows=document.querySelectorAll("#productsTable tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

const editButtons=document.querySelectorAll(".edit-btn");

editButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("سيتم إضافة تعديل المنتج لاحقًا.");

});

});

const deleteButtons=document.querySelectorAll(".delete-btn");

deleteButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

if(confirm("هل تريد حذف المنتج؟")){

btn.closest("tr").remove();

}

});

});

});
