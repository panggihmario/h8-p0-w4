function cariModus(arr) {
  // you can only write your code here!
  var count=0
  var jumlah=0
  var modus=0
  for(let i=0;i<arr.length;i++){
    jumlah+=arr[i]
    if(jumlah /arr.length === arr[i]){
      return -1
    }
      for(let j=0;j<arr.length;j++){
        if(arr[i] ===arr[j] && i !==j){
          count++
          }
      }
    if(count>0){
          modus=i
        }
    }
     if(count ===0){
        return -1
    }
  return arr[modus]

}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1