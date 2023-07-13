
// USER DIFENE FUNCTIONS // USER ABANAVELA FUN...


function demo() {
    // console.log("hvhv");
}
demo();


// function userage(year) {
//     let age = 2023 - year
//     console.log(age)

//     return age;
// }
//  let uage = userage(2000);
//  console.log(uage + 5)



// const  calculateage1 = (year) => {
//     let age = 2023 - year
//     console.log(age)
//     return age;
// }

// let usr1 = calculateage1(2000);
// console.log(usr1 + 5)



const cost = (dest) => {
    if(dest === "Goa"){
        return 35000;
    }else if(dest === "Bali"){
        return 50000;
    }
}

const pakeages = (dest1,dest2) => {
    let c1 = cost(dest1);
    let c2 = cost(dest2);

    let msg = dest1 + "cost you" + c1 + "and" + dest2 + "cost you" + c2

    return msg;
}
console.log(pakeages("Goa", "Bali"));







