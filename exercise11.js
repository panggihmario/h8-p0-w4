function changeMe(arr) {
    // you can only write your code here!
    var dalam={}
  for(let i=0;i<arr.length;i++){
    var nama=(i+1)+ '. ' + arr[i][0] + arr[i][1] + ':'
    dalam.firstName =arr[i][0]
    dalam.lastName  =arr[i][1]
    dalam.gender =arr[i][2]
    if(arr[i][3] === undefined){
      dalam.age ='Invalid Birth Year'
    }
    else{
      dalam.age=arr[i][3]
    }
    console.log(nama)
    console.log(dalam)
  }
     
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""