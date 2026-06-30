document.addEventListener("DOMContentLoaded", () => {

if(localStorage.getItem("vip_login") !== "true"){

window.location.href="../login.html";

}

const ctx=document.getElementById("salesChart");

if(ctx){

new Chart(ctx,{

type:"bar",

data:{

labels:[
"السبت",
"الأحد",
"الاثنين",
"الثلاثاء",
"الأربعاء",
"الخميس",
"الجمعة"
],

datasets:[{

label:"المبيعات",

data:[12,19,8,15,10,18,25],

backgroundColor:[
"#2563eb",
"#22c55e",
"#f59e0b",
"#ef4444",
"#7c3aed",
"#06b6d4",
"#0ea5e9"
],

borderRadius:10

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

scales:{

y:{

beginAtZero:true

}

}

}

});

}

const logout=document.createElement("button");

logout.innerHTML="تسجيل الخروج";

logout.style.position="fixed";
logout.style.left="25px";
logout.style.bottom="25px";
logout.style.padding="12px 20px";
logout.style.background="#ef4444";
logout.style.color="#fff";
logout.style.border="none";
logout.style.borderRadius="12px";
logout.style.cursor="pointer";
logout.style.fontSize="16px";
logout.style.zIndex="999";

document.body.appendChild(logout);

logout.onclick=()=>{

localStorage.removeItem("vip_login");

window.location.href="../login.html";

};

});
