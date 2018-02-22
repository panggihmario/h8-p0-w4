function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var baru=String(angka).split('');
    var result=1


if(baru.length ===1){
    return Number(baru[0])
}
else{
   for(var i=0;i<baru.length;i++){
       result*=baru[i]
   }
    return kaliTerusRekursif(result)    
}
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6