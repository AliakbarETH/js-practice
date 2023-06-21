// // /*
// // Strings are both treated as literals and objects

// // */

// // // let a = "I am a literal String" ;
// // // let b = new String("I am an Object String") ;

// // // // console.log(a) ;
// // // // console.log(b) ;

// // // for(let i = 0 ; i < a.length ; i++){
// // //     console.log(a.charAt(i)) ;
    
// // // }

// // // for(let i = 0 ; i < a.length ; i++){
// // //     console.log(b.charAt(i)) ;
    
// // // }

// // let a = "A" ;
// // let b = "AA" ;
// // // if(a<b){
// // //     console.log(`${a} is greater than ${b}`) ;
// // // }

// // // else if(b>a) {
// // //     console.log(`${b} is greater than ${a}`)
// // // }

// // // else{
// // //     console.log("Both are equal") ;
// // // }

// // let areEqual =  function(str1, str2) {
// //     return str1.toUpperCase() === str2.toUpperCase() ;
// // }

// // console.log(areEqual(a,b)) ;

// // typeof(intl.Collator) ;


// // let a = ['z', 'b'] ;
// // let b = 'z' ;
// // console.log(typeof(a)) ;
// // console.log(typeof(b)) ;

// let c = "Ali" ;
// let d = "Ali" ;
// console.log(c===d) ;

// // global = function declaration
// // local = function experession

// (()=>{
//     console.log("I am ananomyus") ;
// })();

let numbers = [1,2,3,4,5] ;
let sqNum = numbers.map(() =>{
    return numbers ;
}) ;

console.log(sqNum) ;