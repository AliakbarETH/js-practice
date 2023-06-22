
async function clock() {
      for (let h = 0; true ; (h+1)%24) {
        for (let m= 0; m < 60; m++) {
          for (let s = 0; s < 60; s++) {
            const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            console.log(time);
             await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      }
    }    
clock();
  



