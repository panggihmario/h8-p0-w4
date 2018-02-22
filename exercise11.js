function changeMe(arr) {

    for(var i=0;i<arr.length;i++){
        var objArr={};
        var age=2018-arr[i][arr[i].length-1];
        objArr.firstName=arr[i][0]
        objArr.lastName=arr[i][1]
        objArr.gender=arr[i][2]
        if(!age || 2018<arr[i][3]){
            objArr.age='Invalid Birth Year'
        }
        else{
            objArr.age=age
        }
        var hasil=(i+1) +'.' + arr[i][0] +' ' + arr[i][1]+ ':';
        console.log(hasil);
        console.log(objArr);
    }
   
  }
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
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