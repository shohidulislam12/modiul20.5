const numbers=[23,54,67,87]
/*const reversed=numbers.reverse();
console.log(reversed);*/
/*const rev=[];
 for(let number of numbers){
   rev.unshift(number);
 }
console.log(rev);*/
/*const rev=[];
let num;
for(let i=0;i<numbers.length;i++){
 num=numbers[i];
rev.unshift(num);
}
console.log(rev);*/
const rev=[];
for( let i=numbers.length-1;i>=0;i--){
rev.push(numbers[i])
}
console.log(rev);