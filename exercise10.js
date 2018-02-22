function checkAB(num) {
    // you can only write your code here!
    var jarak1=0
    var jarak2=0;
    for(var i=0;i<num.length;i++){
        if(num[i]==='a'){
            jarak1=i
        }
        else if(num[i] ==='b'){
            jarak2=i
        
        }
    }
      // return jarak1 - jarak2 === 4 || jarak2 - jarak1 === 4 (the flash)
    if(jarak1 - jarak2 === 4){
        return true
    }
    else if(jarak2 - jarak1 === 4){
        return true
    }
    else{
        return false
    }
  }

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false