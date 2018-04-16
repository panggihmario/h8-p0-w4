/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. 
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
  // you can only write your code here!
  var split=kata.split(' ')
    var count=0
  for(let i=0;i<split.length;i++){
   
    for(let j=0;j<split[i].length;j++){
      
      for(let k=0;k<split[i].length;k++){
        if(split[i][j] === split[i][k] && j!==k){
          count++
        }
      }
    }
    if(count>0){
      return split[i]
    }
    else{
      return -1
    }
  }

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau