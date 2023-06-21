// // 
// const mypromise = new Promise((success, response) => {
//     let x = 0 ;
//     if(x==0) 
//     {
//         return success("I am success response") ;

//     }
//     else{
//         return response("I am error") ;
//     }

// })

// console.log(mypromise) ;

// console.log(typeof(mypromise)) ;

// // (() => {
// //     mypromise.then(result)
// // })() ;


let countHour = 0 ;
let countMin = 0 ;
let countSec = 0 ;



// let clock = function(){
//     for(let i = 0 ; i < 60 ; i++){
//         countSec++ ;

//         console.log(countSec) ;
//     }

//     // if(countsec >){
//     //     countMin++ 
//     // }

//     if(countSec == 60){
//         countMin++ ;
//         countSec = 0 ;
//     }
//     console.log("Min") ;
//     console.log(countMin) ;


//     for(let i = 0 ; i < 60 ; i++) {
//         countMin++ ;
//     }

//     console.log("")
    
//     if(countMin)

// }

// clock() ;

let countMinutes = 0 ;
let countHours = 0 ;
let currentSeconds = 0 ;

// let currentSeconds = new Date().getSeconds() ;
// console.log(typeof(currentSeconds)) ;

let min = function(currentSeconds){
    if(currentSeconds <=60) {
        if(currentSeconds == 60) 
        {
            countMinutes++ ;
        }
        return countMinutes ;

    }
   
}

let hours = function(countMinutes) {
    if(countMinutes == 60) {
        countHours++
    }
    return countHours ;
}



let clock = function(){
    for(let i = 0 ; i < 60 ; i ++){
        currentSeconds++ ;
    }

    // min(currentSeconds) ;
    // hours(countMinutes) ;

    console.log("Time is : " + "Seconds : " + currentSeconds + "  Minutes : " +  min(currentSeconds) + " Hours : " + hours(countMinutes) ) ;


}

clock() ;
