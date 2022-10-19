
// slider
const baox= document.querySelector(".baox")
const salide = document.querySelectorAll(".salide")
const naext = document.querySelector(".naext")
const parew = document.querySelector(".parew")
let n = 0;
function salider(){
if(n<0){
   n=salide.length-4.5;
}
if(n>salide.length-3){
   n=0;
}
baox.style.transform=`translateX(${-n*22.7}rem)`;
};
naext.addEventListener('click', () =>{
   n++;
   salider();
   st()
});
parew.addEventListener('click', () =>{
   n--;
   salider();
   st()
});

let fx= function play(){
   n++
   salider();
}
let stop=setInterval(fx,2000);
let st= function st(){
   clearInterval(stop)
}


let ulNav = document.querySelector(".navbar");
let click = document.querySelector("h4");

click.onclick = function() {
    ulNav.classList.toggle("open");
};



