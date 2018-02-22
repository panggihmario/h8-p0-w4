function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var stockSepatu  = listBarang[0][2]
    var stockBaju    = listBarang[1][2]
    var stockSweater = listBarang[2][2]
   
    var pembeliSepatu = []
    var pembeliBaju  = []
    var pembeliSweater = []

    var final=[]
    for(var i =0;i<shoppers.length;i++){
        if(shoppers[i].product ==='Sepatu Stacattu'){
            if(stockSepatu >=shoppers[i].amount){
                pembeliSepatu.push(shoppers[i].name)
                stockSepatu-= shoppers[i].amount;
            }
        }
        else if(shoppers[i].product === 'Baju Zoro'){
            if(stockBaju >=shoppers[i].amount){
                pembeliBaju.push(shoppers[i].name)
                stockBaju-= shoppers[i].amount;
            }
        }
        else if(shoppers[i].product === 'Sweater Uniklooh'){
            if(stockSweater >=shoppers[i].amount){
                pembeliSweater.push(shoppers[i].name)
                stockSweater-= shoppers[i].amount;
            }
        }
    }
    var pembeli;
    var sisa;
   
    for(var j=0;j<listBarang.length;j++){
        if(listBarang[j][0]==='Sepatu Stacattu'){
            pembeli=pembeliSepatu
            sisa=stockSepatu
            totProfit=(listBarang[j][2]-stockSepatu)*listBarang[j][1]
        }
        else if(listBarang[j][0]==='Baju Zoro'){
            pembeli=pembeliBaju
            sisa=stockBaju
            totProfit=(listBarang[j][2]-stockBaju)*listBarang[j][1]
        }
        else if(listBarang[j][0] === 'Sweater Uniklooh'){
            pembeli=pembeliSweater
            sisa=stockSweater
            totProfit=(listBarang[j][2]-stockSweater)*listBarang[j][1]

        }
        
    var tampung={}
    tampung.product=listBarang[j][0];
    tampung.shoppers=pembeli
    tampung.leftOver=sisa
    tampung.totalProfit=totProfit
    final.push(tampung);
    }
    
    return final
  }
  
  // TEST CASES
//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//   console.log(countProfit([])); //[]