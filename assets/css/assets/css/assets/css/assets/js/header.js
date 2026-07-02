class DarCareHeader{

constructor(){

this.header=document.querySelector(".dc-header");

this.init();

}

init(){

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

this.header.classList.add("scrolled");

}else{

this.header.classList.remove("scrolled");

}

});

}

}

document.addEventListener("DOMContentLoaded",()=>{

new DarCareHeader();

});
