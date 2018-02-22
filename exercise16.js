function makanTerusRekursif(waktu) {
    // you can only write your code here!
    // var frekuensi=0
    // for(var i=0;i<waktu;i++){
    //   if(i % 15===0){
    //     frekuensi++
    //   }
    // }

    if(waktu === 0){return 0}
    var frekuensi=0
    if(waktu <= 15){
      return 1
    }
      else{
       return 1 + makanTerusRekursif(waktu-15) 
        
      }
  }
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0