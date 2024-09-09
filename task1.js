//Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev=colors.reverse();
// console.log(rev);

//  let rev=[ ];
// for(i=0;i<colors.length;i++){
// rev.unshift(colors[i])
// }
// console.log(rev);

// let rev=[ ];
// for(i=colors.length-1;i>=0;i--){
//     rev.push(colors[i])
// }
// console.log(rev);
  let rev=[];
for(let prop of colors){
   rev.unshift(prop)
}
console.log(rev);