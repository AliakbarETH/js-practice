let sec = 1 ;
let min = 0 ;
let hour = 0 ;
let day = 0 ;

for(let i = 0 ; i < 60 ; i++) {
    if(sec%60 == 0) {
        console.log(min++) ;

    }
    else if(min%60 == 0 ){
        console.log(hour++) ;
    }
    else if(hour%24 == 0){

        console.log(day++) ;
     }

}




