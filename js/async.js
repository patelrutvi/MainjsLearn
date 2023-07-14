//.....sync...programmm...

// const fiestprosses = () => {
//     console.log("first prosses");
// }
// const secondprosses = () => {
//     console.log("second prosses");
// }
// const thirdprosses = () => {
//     console.log("third prosses");
// }

// fiestprosses()
// secondprosses()
// thirdprosses()

////.....sync problem ..define and program..
// .............Syncr...........procsses one by one run thase...
// (in case vachche ni koi prosses ne 
// time lagse to niche ni block they jase...)


// const fiestprosses = () => {
//     console.log("first prosses");
// }
// const secondprosses = () => {
//     let now = new Date()

//     while(new Date() - now < 5000){

//     }
//     console.log("second prosses");
// }
// const thirdprosses = () => {
//     console.log("third prosses");
// }

// fiestprosses()
// secondprosses()
// thirdprosses()


// ..........Async .......koi pan prosses wait n karse run they jase...
//..bydefult asyn...
// console.log("async => prosses");

// setTimeout(() => {
//     console.log("i got the programm");
// }, 5000);

// console.log("i am in programm");



// .........Call back ..
// const print = (ans) => {
//     console.log("ans is",ans);
// }
// const add = (a,b,callback) => {
//     let ans = a + b

//     callback(ans)

// }
// add(2,5,print)


// .........callbaccck sync......


// console.log("programm start");

// const display = (data) => {//6
//     console.log(data);
// }

// const getData = (callback) => {//2

//         setTimeout(() => {
//             let data = {id:1,name:'asd'}//4
//             callback(data)//5
//         }, 5000);//3. wait 2sec
// }

// getData(display)//1

// console.log("program end");


// .........Promise...

// console.log("program start");


// const mypromise = new Promise ((resolve,reject) => {

//     setTimeout(() => {
//         resolve("i got programm")
//     }, 2000);

// });

// // console.log(mypromise);
// mypromise
// .then((res) => console.log(res))
// .catch((error) => console.log(error))
// .finally(() => console.log("i am always exicute"))


// console.log("handle user input");

// .......async await.......
console.log("program start");

const getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let ans = await response.json()
    console.log(ans);
}
getData()
console.log("handle user input");