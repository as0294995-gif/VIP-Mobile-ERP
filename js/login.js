document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value.trim();

const password = document.getElementById("password").value.trim();

if(username === "admin" && password === "1234"){

localStorage.setItem("vip_login","true");

window.location.href = "pages/dashboard.html";

}else{

alert("اسم المستخدم أو كلمة المرور غير صحيحة");

}

});

if(localStorage.getItem("vip_login") === "true"){

window.location.href = "pages/dashboard.html";

}

});
