// let city = "surat";

// const printdata = () => {
//     console.log(city);
// }
// printdata();

// city = "vapi";
// printdata();


// let name = "rutvi";

// const info = (edu) => {
//     // console.log(edu);
//     let age = 25;

//     return function printdata(){
//         console.log(name);
//         console.log(age);
//         console.log(edu);
//     }
// }
// let ans = info("BCA");
// ans();

// let counter = () => {
//     let count = 0;
//     return function incre(){
//         count = count + 1;
//         return count;
//     }
// }
// let res = counter();
// res();
// res();
// console.log(res());


// let a = counter();
// a();
// console.log(a());


//out f
let counter = () => {
   let  count = 0//out f v
   return function print (){ //in f
    count = count + 1
    return count;
   }
}
//res has in f refrence
let res = counter();//call out f
res();//call in f
console.log(res())

let res1 = counter()
res1();
res1();

console.log(res1());