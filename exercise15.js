function changeVocals (str) {
  var ganti=''
  for(var i=0;i<str.length;i++){
    if(str[i]==='a'){
       ganti+='b'
     }
     else if(str[i]=== 'i'){
       ganti+='j'
     }
     else if(str[i] === 'u'){
       ganti+='v'
     }
     else if(str[i] === 'e'){
       ganti+='f'
     }
     else if(str[i] ==='o'){
       ganti+='p'
     }
     else if(str[i]=== 'A'){
       ganti+='B'
     }
     else if(str[i] === 'I'){
       ganti+='J'
     }
     else if(str[i] === 'U'){
       ganti+='V'
     }
     else if(str[i] ==='E'){
       ganti+='F'
     }
     else if(str[i] ==='O'){
       ganti+='P'
     }
     else{ ganti+=str[i]
     }
 }
 return ganti
 }

 
 function reverseWord (str) {
   var balik=''
   for(var j=str.length-1;j>=0;j--){
     balik+=str[j]
   }
   return balik
 }
 
 function setLowerUpperCase (str) {
   
   var splitKata=str.split('');
   var tukar=[]
   
   for(var k=0;k<str.length;k++){
     if(splitKata[k] === splitKata[k].toUpperCase()){
       tukar[k]=splitKata[k].toLowerCase()
     }
     else if(splitKata[k] === splitKata[k].toLowerCase()){
       tukar[k]=splitKata[k].toUpperCase()
     }
   }
   return tukar.join('');
 }
 
 function removeSpaces (str) {
   var splitStr=str.split(' ')
   var gabung=splitStr.join('')
   return gabung
 }
 
 function passwordGenerator(name) {
 var change=changeVocals(name);
 var reverse=reverseWord(change);
 var lower=setLowerUpperCase(reverse);
 var remove=removeSpaces(lower);
     if(name.length<5){
           return 'Minimal karakter yang diinput adalah 5 karakter'}
 return remove

 }
 
 console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
 console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
 console.log(passwordGenerator('Alexei')); // 'JFXFLb'
 console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'