//Use a for...of loop to concatenate all the elements of an array into a single string.
 var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let com='';
 for(let number of numbers){
     com=com.concat(number);
 }
 console.log(com);
