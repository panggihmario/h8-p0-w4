function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barang=['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone']
    var sisa=money
    var list=[]
    for(var i=0;i<barang.length;i++){
        if(sisa>=1500000){
            list.push(barang[0])
            sisa-=1500000
        }
        else if(sisa>=500000){
            list.push(barang[1])
            sisa-=500000
        }
        else if(sisa>=250000){
            list.push(barang[2])
            sisa-=250000
        }
        else if(sisa>=175000){
            list.push(barang[3])
            sisa-=175000
        }
        else if(sisa>=50000){
            list.push(barang[4])
            sisa-=50000
            break
        }
    }
    var obj={}
    obj.memberId=memberId;
    obj.money=money
    obj.listPurchased=list
    obj.changeMoney=sisa

    if(memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if(money < 50000){
        return "Mohon maaf, uang tidak cukup"
    }
    return obj
  }
  
  // TEST CASES
//   console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja