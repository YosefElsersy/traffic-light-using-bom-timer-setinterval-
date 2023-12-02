var bdy  = document.getElementsByTagName("body"); 
var btn = document.getElementById("up");
// scrollTo (x , y ) ;   ===> scroll to has a start point so if we scrolled to
// 150px of the webpage  so it will not move to 150 again 
// scrollBy (x,y) ;     ===> 
// bdy[0].scrollTo(0, 150) ; 

window.addEventListener('scroll' , (e)=>{
   if(window.scrollY > 200){
        btn.style.display = "block" ; 
   }
   else{
    btn.style.display = "none" ; 
   }
})

btn.addEventListener("click" , (e)=>{
    scrollTo({
        top:0 , 
        left:0 , 
        behavior :"smooth"

    });
})
bx1 = document.getElementsByClassName("box")
console.log(bx1);
var flag = false
setInterval(() => {
    if(flag){  
    bx1[0].style.backgroundColor = "#ff7675"
        flag = false
    }else{
        bx1[0].style.backgroundColor = "red"
        flag=true;    
    }    

}, 3000); 
//milli second 
setTimeout( ()=> {
    bx1[1].style.backgroundColor = "black";

} , 2000  )