/*
Strings are both treated as literals and objects

*/

// let a = "I am a literal String" ;
// let b = new String("I am an Object String") ;

// // console.log(a) ;
// // console.log(b) ;

// for(let i = 0 ; i < a.length ; i++){
//     console.log(a.charAt(i)) ;
    
// }

// for(let i = 0 ; i < a.length ; i++){
//     console.log(b.charAt(i)) ;
    
// }

let a = "A" ;
let b = "AA" ;
// if(a<b){
//     console.log(`${a} is greater than ${b}`) ;
// }

// else if(b>a) {
//     console.log(`${b} is greater than ${a}`)
// }

// else{
//     console.log("Both are equal") ;
// }

let areEqual =  function(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase() ;
}

console.log(areEqual(a,b)) ;