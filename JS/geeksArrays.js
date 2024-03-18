// const arr= new Array(4);
// let res = arr.fill(0);
// console.log(res);

//-----------------------------------

//2d array with 0 vals:
// const TwodArr = new Array(3).fill().map(()=> new Array(3).fill(0));
// console.log(TwodArr);

//--------------------------------------

// const arr = new Array(5);
// let newArr = arr.map((val)=>val*6);
// console.log(newArr);

//-------------------------------------
// let [firstName, , thirdName] = ["alpha", "beta", "gamma", "delta"]; 
// console.log(thirdName);

//--------------------------------------
// const array = [1, 2, 3, 4, 5]; 
// let r= Object.keys(array); //gives indexes in array
// // let r = Object.keys(array).length; // gives length of array
// console.log(r);

//----------------------------------------
// const Array = [1, 2, 3, 4, 5];
// let r = Math.max(...Array.keys())+1;
// console.log(r);

//----------------------------------------
// const Array = [1, 2, 3, 4, 5];
// // let r = Array.join().split(',').length;
// let r = Array.toString().split(',').length;
// console.log(r);

//------------------------------------
//swap first and last elements:
// const Array = [1, 2, 3, 4, 5];
// [Array[0],Array[Array.length-1]] = [Array[Array.length-1], Array[0]];
// console.log(Array);

//-----------------------------------
//array without middle element:
const Arr = [10, 20, 30, 40, 50];
// let middle = Math.floor(Arr.length/2);
// console.log(middle);
// let newArr = [...Arr.slice(0, middle), ...Arr.slice(middle+1)];
// console.log(newArr);

let midIndex = Math.floor(Arr.length/2);
// delete Arr[midIndex];
// console.log(Arr);

let r2 = Arr.filter((val,index) => index!=midIndex);
console.log(r2);



