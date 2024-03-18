//reverse a str:

// const str = 'sana';
// let res=[];
// str1 = str.split('').reverse().join('');
// console.log(str1);

//-----------------------------------------------

//find vowels:

// const str = 'feroz';
// let count=0;
// let vowels=[];
// let strArr = str.split('');
// for(let i=0; i<strArr.length; i++){
//     if(strArr[i] == 'a' || strArr[i] == 'e' || strArr[i] == 'i' || strArr[i] == 'o' || strArr[i] == 'u'){
//         vowels.push(strArr[i]);
//         count++;
//     }
// }
// console.log(vowels + ' ' + count);

//----------------------------------------------

//find palindrome or not:

// const str = 'kadak';

// str = str.toLocaleLowerCase();

// let strArr = str.split('').reverse().join('');

// console.log(str === strArr);

//---------------------------------------------------

//swap two vars without using third var:

// let a=5, b=6;

// // a = a+b;
// // b = a-b;
// // a = a-b;

// // console.log(a + ' ' +b);

// [a,b] = [b,a];
// console.log(`${a} ${b}`);

//------------------------------------------------

//array destructuring;

// let n = [1,2,3,4];
// [a,b,c,d] = [...n];
// console.log(c);

//--------------------------------------

// const arr = ['abc','def'];
// let res = arr.join(); //abc,def
// console.log(res);

//-------------------------------------