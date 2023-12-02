// target is the count  ?
// required is uservalue (string ) 
//, loop with a condition on the uservalue
// the vowels to check 

function vowelsChecker(value){
    vwls = ['a' , 'e' , 'u' , 'i' , 'o'] ; 
    var cnt = 0 ; 
            //hello world from hell 
    for (let i = 0; i < value.length ; i++) {
        // console.log(value[i]);
        //nested loop 
        for (let j = 0; j < vwls.length; j++) {
            if(value[i] == vwls[j])
            {   
                cnt+=1 ;  
            }
            
        }       
    }

    return cnt ; 
}

console.log(vowelsChecker("osaidhioawheoqwndlkasnvcv,.dn;fcouw;jdlakndmlknd"));

function vowelsChecker1(value){
    vwls = ['a' , 'e' , 'u' , 'i' , 'o'] ; 
    var cnt = 0 ; 
            //hello world from hell 
    for (let i = 0; i < value.length ; i++) {
        // console.log(value[i]);
        //nested loop 
        if(value[i] == 'e' || value[i] == 'a' || value[i] == 'o' ||  value[i] == 'u' || value[i] == 'i' ){
            cnt+=1 ; 
        }    
               
    }

    return cnt ; 
}
console.log(vowelsChecker1("osaidhioawheoqwndlkasnvcv,.dn;fcouw;jdlakndmlknd"));

var ico = document.getElementById("ico");
var body = document.getElementsByTagName("body")

ico.addEventListener("click" , (e)=>{
    body[0].style.backgroundColor = "#130f40" ; 
    body[0].style.color = "white";
} );