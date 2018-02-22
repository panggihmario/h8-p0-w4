function totalDigitRekursif(angka) {
    // you can only write your code here!
    var baru=String(angka).split('');
    var result=0
//     for(var i=0;i<baru.length;i++){
//         result+=Number(baru[i])
//  }
//    return result
if(baru.length ===1){
    return Number(baru[0])
}
else{
   
    result+= parseInt(baru[0])
    // return result
    baru.splice(0,1)
    baru = baru.join("")
    
    return result + totalDigitRekursif(parseInt(baru))
    
}

}

  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5