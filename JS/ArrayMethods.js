// find duplicate elements:
// const arr = [1,2,3,2,4,3,4,5,1];
// let res =[];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] == arr[j]){
//             res.push(arr[i]);
//         }
//     }
// }
// console.log(res);

//---------------------------------------------

//find max/min value in array:

// const arr=[1,9,87,66, 547];

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             const temp = arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);
// console.log('min:', arr[0]);
// console.log('max:', arr[arr.length-1]);

//reduce:
// let res = arr.reduce((acc,cur)=>{
//     return acc>cur ? acc : cur;
// });
// console.log('max::', res);

//------------------------------------------------------

//find 2nd largest val in array:

// const arr = [10,20,30,40,50];
// let largest = arr.reduce((acc,cur)=>{
//     return acc>cur?acc:cur;
// });
// largestIndex = arr.indexOf(largest);
// arr.splice(largestIndex, 1);
// let res = arr.reduce((acc,cur)=>{
//     return acc>cur ? acc: cur;
// });
// console.log(res);

//-------------------------------------------------------

//spread operator:

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// // console.log([...arr1,...arr2]);
// let max = Math.max(...arr2);
// console.log(max);

//rest operator:

// function add(...arr){
//     return arr.reduce((acc,cur)=> acc+cur);
// }
// console.log(add(1,2,3,5));

//-------------------------------------------------------------

//find missing no. in given int array of 1 to 10:

// const arr = [2,3,4,6,7,8,10];
// let res =[];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// for(let i=min; i<max; i++){
//     if(arr.indexOf(i)<0){
//         res.push(i);
//     }
// }
// console.log(res);

//----------------------------------------------------------

//find even or odd numbers in the array:

// const arr = [2,3,4,6,7,8,10];
// const even=[];
// const odd =[];

// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         even.push(arr[i]);
//     }
//     else{
//         odd.push(arr[i]);
//     }
// }
// console.log('even:', even);
// console.log('odd:',odd);

//----------------------------------------------------

//sum of all elements:

// const arr=[1,2,3,4,5];
// // let res = arr.reduce((acc,cur) => acc+cur);
// // console.log(res);

// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum = sum+arr[i];
// }
// console.log(sum);

//-----------------------------------------------

//factorial of given num:

// const num = 7;
// let fact=1;

// for(let i=1; i<=num; i++){
//     fact =fact * i;
// }
// console.log(fact);

//-----------------------------------------------

//create fibonacci series upto given limit:

// const limit = 6;
// let fib=[0,1];
// for(let i=2; i<limit; i++){
//     fib[i] = fib[i-1]+fib[i-2];
// }
// console.log(fib);

//--------------------------------------------

//find if given no is prime:

const num = 29;
let res = 'prime';

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        res = 'not prime';
        break;
    }    
}
console.log(res);