function cariMedian(arr) {
  // you can only write your code here!
var panjang=arr.length
var bagi=0
var bagi1=0
var bagi2=0
for(var i=0;i<panjang;i++){
  if(panjang%2 !==0){
    bagi=(panjang-1)/2
    var hasil=arr[bagi]
  }
  else{
    bagi1=(panjang-2)/2
    bagi2=((panjang-2)/2)+1
    var hasil=(arr[bagi1]+arr[bagi2])/2
  }
}
return hasil
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
