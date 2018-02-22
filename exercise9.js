function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var splitKal=kalimat.split('');
    var panjang=kalimat.length
    var result=[]
    for(var i=0;i<panjang;i++){
        if(splitKal[i]===splitKal[i].toUpperCase()){
            result[i] = splitKal[i].toLowerCase();
        }
        else if(splitKal[i]===splitKal[i].toLowerCase()){
            result[i]=splitKal[i].toUpperCase()
        }
    }  
        return result.join('')
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"