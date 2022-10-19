








// slider
const bfox= document.querySelector(".bfox")
const sflide = document.querySelectorAll(".sflide")
const nfext = document.querySelector(".nfext")
const pfrew = document.querySelector(".pfrew")
let n = 0;
function sflider(){
if(n<0){
   n=sflide.length-1;
}
if(n>sflide.length-1){
   n=0;
}
bfox.style.transform=`translateX(${-n*53}rem)`;
};
nfext.addEventListener('click', () =>{
   n++;
   sflider();
   st()
});
pfrew.addEventListener('click', () =>{
   n--;
   sflider();
   st()
});

let fx= function play(){
   n++
   sflider();
}
let stop=setInterval(fx,2000);
let st= function st(){
   clearInterval(stop)
}


