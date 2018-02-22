function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf='abcdefghijklmnopqrstuvwxyz';
    var isi='';
    var banding=''
    for(var i=0;i<kata.length;i++){   
        for(var j=0;j<huruf.length;j++){
            if(kata[i]===huruf[j]){
                if(huruf[j]==='z'){
                    banding+='a';
                }
                else{
                    banding+=huruf[j+1]
                }
            }
          
        }
    }
   return banding


  }
  
  // TEST CASES
  console.log(ubahHuruf('woz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu