const fs = require('fs');
let days = []

fs.readdirSync("./data").forEach(file => {
  days.push(file)
});
// les jours à analyser

let jsons = []
let maxProfit = 5;
let minProfit = -10




// on met tout les jsons dans la liste
for(let day of days){
  let json = jsons.push(require("./data/"+day))
}


// on place une position dès le départ
let quantity = 0.05
let position = jsons[0][0][1]

let total = 0;

// loop on all jsons to analyze
for (let json of jsons){
  // loop day by day
  for(let data of json){
    // loop data by data
    let date = new Date(data[0]*1000) // date de la donnée, varie toutes les min
    let profit = (data[1] - position)*quantity

    if(profit > maxProfit && profit < 100000){
      // profit positif, donc nouvelle position
      total+=profit;
      position = data[1]
      //maxProfit++
    }

    // else if(profit < minProfit){
    //   // si le profit est très bas, on ferme la position et on prend 2 fois la quantité de la position
    //   total+=profit;
    //   if(quantity<=0.5){
    //     quantity = quantity * 1.1
    //     //minProfit--;
    //   }
    //
    //   position = data[1]
    //
    // }


  }
}

console.log("total gain: "+total+"€")
