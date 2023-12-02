//type conversion
// the ability to change datatype from a form to another form of datatype

// var userValue =  prompt("hey there please enter a number : ");

// console.log(typeof(userValue));
// console.log( Number(userValue) + 2);
// if you are inteneded mathimatical operation like (* , - ,/ , % , **)
// auto conversion to a number 
//  value  opertaor value  
// var val = 3 ; 
// console.log(typeof(val));
// console.log(typeof(String(val)));

//-----------------------------------------------

var userValue =  prompt("please enter your Country (egy - oman - usa) : ")
updateValue = ''
if(userValue.toLowerCase() == "egy"){
    var num = prompt("please enter your number  : ");
    updateValue = '+20' + num ; 

    confirm("your number is " + updateValue);
}
else if(userValue.toLowerCase() == "usa"){
    var num = prompt("please enter your number  : ");
    updateValue = '+999' + num ; 

    confirm("your number is " + updateValue);
}
else {
    var num = prompt("please enter your number  : ");
    updateValue = '+968' + num ; 

    confirm("your number is " + updateValue);
} 

// var userValue =  prompt("enter a sentence : " );

// alert(userValue.toLowerCase());
// alert(userValue.toUpperCase());


