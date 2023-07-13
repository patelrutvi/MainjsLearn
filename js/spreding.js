// ...SPREADING OPRATORS

// mergin
// let arr1 = [43,56,76,23,56];
// let arr2 = [99,100];

// let ans = [...arr1 , ...arr2]

// let ans = [101,34,...arr1,777,...arr2,'ok']

// console.log(ans);

// destructring

// let info = ['rutvi','patel',25]

// let [fname,lname,age] = info

// console.log(lname);


//MIP  METHOD / FUNCTONS //ES6


// 1) MAP
//2) FILTER
//3) REDUCE


//FILTER

// let arr = [1,2,6,8,3,20]

// let fdata = arr.filter((v,i) => v > 5);
// console.log(fdata);

// let fdata = arr.reduce((acc , v ,i) => acc + v , 0)
// console.log(fdata);

// let fdata = arr.filter((v) => v > 5)
//             .reduce((acc,v) => acc + v , 0)
//             console.log(fdata);


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









// ********************************************OBJECT SPRADING(...REACT...)***************************************//



let obj1 = {
    id:'102',
    name:"rutvi",
    city:"surat"
}

//......copy.....
 let obj2 = {...obj1}
 console.log(obj2);

//  .......merging
 let obj3 ={city:"surat",...obj1,edu:'bachlore'}
 console.log(obj3);

 //......merging
let obj9 ={
    id:'102',
    city:"baroda"
}
 let ans = {...obj9,...obj3}
 console.log(ans);
//destructuring

let {id,name,citi} = obj1
console.log(name);