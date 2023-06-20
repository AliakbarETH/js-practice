/*
Strings are both treated as literals and objects

*/

let a = "I am a literal String" ;
let b = new String("I am an Object String") ;

// console.log(a) ;
// console.log(b) ;

for(let i = 0 ; i < a.length ; i++){
    console.log(a.charAt(i)) ;
    
}

for(let i = 0 ; i < a.length ; i++){
    console.log(b.charAt(i)) ;
    
}