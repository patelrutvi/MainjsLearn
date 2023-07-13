const d = new Date
let hour = d.getHours();

// console.log(d,hour)

if(hour <= 12){
    document.getElementById("mess").innerHTML = " good morning"
}else if(hour >= 12 && hour <= 16 ){
    document.getElementById("mess").innerHTML = " good afternoon"
}else {
    document.getElementById("mess").innerHTML = " good evning"
}

const z = new Date();

// 


// document.write(z.getFullYear())//2023  full year display thase

// document.write(z.getDay()) //5  week no day batavse


//const z = new Date(1680856523);
// document.write(z)

document.write(z.toDateString())


// const birthday2 = new Date("2023-07-10T03:24:00"); // birthday set thase


// document.write(birthday2)  // birthday set thase





