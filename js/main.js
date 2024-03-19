let sclick =document.querySelector(".s_click");
let jclick =document.querySelector(".j_click");
let slist =document.querySelector(".s_list");
let jlist =document.querySelector(".j_list");


function sClick(){
  slist.style.display="flex";
  jlist.style.display="none";
  sclick.style.color="#4d00b1";
  jclick.style.color="#333";
}

sclick.addEventListener('click',sClick);

function jClick(){
  jlist.style.display="flex";
  slist.style.display="none";
  jclick.style.color="#4d00b1";
  sclick.style.color="#333";
}

jclick.addEventListener('click',jClick);