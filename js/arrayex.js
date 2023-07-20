
// let arr1 = [33, 65, 4, 76, 12]

// console.log(arr)
// const findmaxarr = (data) => {
//     let max = arr1[0]

//     for(let i = 1; i < data.length; i++){
//         if(data[i] > max){
//             max = data[i];
//         }
//     }
//     console.log(max)
// }
// findmaxarr(arr1)



// const findminarr = (data) => {
//     let min = arr1[0]

//     for(let i = 1; i < data.length; i++){
//         if(data[i] < min){
//             min = data[i];
//         }
//     }
//     console.log(min)
// }
// findminarr(arr1)

/*****************secondlarge******* */
// let arr1 = [33, 65, 4, 76, 12]
// const ascend = (data) => {
//     let ans = data.sort((a, b) => b- a);
//     let a = data[1]
//     console.log(a);

// }
// ascend(arr1)

/************nanu num *********** */

// let arr1 = [33, 65, 4, 76, 12]
// const ascend = (data) => {
//     let ans = data.sort((a, b) => a-b);
//     let a = data[0]
//     console.log(a);

// }
// ascend(arr1)

/************************* */
// let arr = [33, 65, 4, 76, 12]

// const finsmedian = (data) => {
//     med = arr[0]
//     for(let i = 0;i < data.length; i++){
//         ans = Math.ceil(data.length / 2)
//        console.log(data[ans-1])
//       //  console.log(Math.ceil(i))

//       // console.log(data[i-1]);
//     }

// }
// finsmedian(arr)


/**********slilt**************** */


// let data1 = ["rutvi", 41, "patel", 8.86]
// const sliarr = (data) => {
//     let a1 = [] 
//     let a2 = []
//     data1.map((v) => {
//         if (typeof v === 'number') {
//             a1.push(v)
//         } else if (typeof v === 'string') {
//             a2.push(v)
//         }

//     })
//     console.log(a1,a2);
// }
// sliarr(data1)




// let data1 = ["rutvi", "patel", 41, 8.86]
// const rotatearr = (data) => {
//     let a1 = []
//     let a2 = []
//     data1.map((v) => {
//         if (typeof v === 'number') {
//             a1.push(v)
//         } else if (typeof v === 'string') {
//             a2.push(v)
//         }
//     })
//     // console.log(a1,a2);

//     let con = a1.concat(a2)
//     console.log(con);
// }
// rotatearr(data1)


//rotate last 2 digit using slice and concate
let arr = [33, 65, 4, 76, 12]
const f = arr.slice(0,3)
const l = arr.slice(3)
console.log(f);
console.log(l);
let ans = l.concat(f)
console.log(ans);





// let arr = [2, 54, 76, 2, 33,]

// const removeele = (arr, ele) => {
//     let data = arr.filter((v, i) => v != ele);
//     console.log(data);
// }

// removeele(arr, 2)

// let arr = [2, 54, 76, 2, 33,]

// const  replaceele = (arr,oldele,newele) => {
//      let ans1 = arr.map((r) => r === oldele ? newele : r)
//      console.log(ans1);
// }
// replaceele(arr , 76 , 88)


// let arr = [33, 98, 2, 6, 89]

// const maxsum = (arr) => {
//     let ans = arr.sort((a, b) => b - a)
//         .slice(0, 3)
//         .reduce((acc, v) => acc + v, 0);
//     console.log(ans);
// }
// maxsum(arr)




