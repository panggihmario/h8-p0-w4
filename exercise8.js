function urutkanAbjad(str) {
  // you can only write your code here!
  var split=str.split('')
  for(let i=1;i<split.length;i++){
    
    for(let j=0;j<i;j++){
      if(split[i]<split[j]){
        var x=split[i]
        split[i]=split[j]
        split[j]=x
      }
    }
  }
  return split.join('')
  
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'