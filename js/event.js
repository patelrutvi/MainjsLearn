// const hendleclick = () => {
//     console.log("click me")
// }


// const hendlemouseover = () => {
//     console.log("mouseover")
// }


// const hendlemousedown = () => {
//     console.log("mousedown")
// }



// let extrabtn = document.getElementById("extra");

// const extra = () => {
//     console.log("extra click")
// }


// const hendlekeydown = () => {

//     let fdata = document.getElementById("fname").value


//      console.log(fdata)

// }


// const hendlekeyup = () => {

//     let fdata = document.getElementById("fname").value;
//     console.log(fdata )

// }


// const heandelkeyup=()=>{
//     let lnamedata = document.getElementById("lname").value

//     // console.log(lnamedata)

//     if(lnamedata === ''){
//         document.getElementById("lnamee").innerHTML = "error"
//     }else {
//         document.getElementById("lnamee").innerHTML = ""
//     }


// }



// lnamedata.addEventListener("keyup",heandelkeyup)




// extrabtn.addEventListener("click", extra)

// extrabtn.addEventListener("mouseover", hendlemouseover)


// extrabtn.addEventListener("mousedown", hendlemousedown)

// fdata.addEventListener("keyup",hendlekeyup)



let refreg = document.getElementById("registration");

let fnameref = document.getElementById("fname");


const handelsubmit = () => {
    console.log("sdfg")

    return false;
}


const heandelFocus = () => {
    fnameref.style.borderColor = 'red';
}

const heandelBlur = () => {
    fnameref.style.borderColor = 'green'
}
const handelChange = () => {
    let fnameval = fnameref.value;

    console.log(fnameval)
}



fnameref.addEventListener("focus",heandelFocus)

fnameref.addEventListener("blur",heandelBlur)

fnameref.addEventListener("change",handelChange)