// const lode = () => {
//     alert("Page is loaded")
// }

let fnameref = document.getElementById("fname")
let mailref = document.getElementById("email")
let passref = document.getElementById("pass")
 let regref = document.getElementById("registration")



const heandlekey = () => {
    // fnameref.style.borderColor = 'green'
    

    if(fnameref.value === ''){
        document.getElementById("fname_error").innerHTML = "error"
        fnameref.style.borderColor = 'red'
        
    }else{
        document.getElementById("fname_error").innerHTML = ""
        fnameref.style.borderColor = 'green'
    }
}
const heandelFocus = () => {

    // if(!(fnameref.value === '') ){
    //     document.getElementById("fname_error").innerHTML = "error"
    //     fnameref.style.borderColor = 'red'
        
    // }
}

const heandelBlur = () => {
    // fnameref.style.borderColor = 'red'
    if(fnameref.value === ''){
        document.getElementById("fname_error").innerHTML = "error"
        fnameref.style.borderColor = 'red'
     
    }else{
        document.getElementById("fname_error").innerHTML = ""
        fnameref.style.borderColor = 'green'
    }
}



const heandlekey1 = () => {
    // mailref.style.borderColor = 'green'

    if(mailref.value === ''){
        document.getElementById("email_error").innerHTML = "error"
        mailref.style.borderColor = 'red'
    }else{
        document.getElementById("email_error").innerHTML = ""
        mailref.style.borderColor = 'green'
    }

}
const heandelFocus1 = () => {
            // if(!(mailref.value === '')){
            //     document.getElementById("email_error").innerHTML = "error"
            //     mailref.style.borderColor = 'red'
            // }
}

const heandelBlur1 = () => {
    // mailref.style.borderColor = 'red'

    if(mailref.value === ''){
        document.getElementById("email_error").innerHTML = "error"
        mailref.style.borderColor = 'red'
    }else{
        document.getElementById("email_error").innerHTML = ""
        mailref.style.borderColor = 'green'
    }
}



const heandlekey2 = () => {
    //  passref.style.borderColor = 'red'

    if(passref.value === ''){
        document.getElementById("pass_error").innerHTML = "error"
        passref.style.borderColor = 'red'
    }else{
        document.getElementById("pass_error").innerHTML = ""
        passref.style.borderColor = 'red'
    }

}
const heandelFocus2 = () => {
    // if(!((passref.value === ''))){
    //     document.getElementById("pass_error").innerHTML = "error"
    //     passref.style.borderColor = 'red'
    // }
}
const heandelBlur2 = () => {
    // passref.style.borderColor = 'red'

    if(passref.value === ''){
        document.getElementById("pass_error").innerHTML = "error"
        passref.style.borderColor = 'red'
    }else{
        document.getElementById("pass_error").innerHTML = ""
        passref.style.borderColor = 'red'
    }
}



fnameref.addEventListener("focus",heandelFocus)
fnameref.addEventListener("blur",heandelBlur)


mailref.addEventListener("focus",heandelFocus1)
mailref.addEventListener("blur",heandelBlur1)



passref.addEventListener("focus",heandelFocus2)
passref.addEventListener("blur",heandelBlur2)




// const heandelFocus = () => {
//     let fnameref= document.getElementById("fname").value
   
//     // console.log(fnameref)

//     if (fnameref === ''){
//         document.getElementById("fname").style.borderColor = 'red'
//         document.getElementById("fname_error").innerHTML = "error"
//     }else {
//         document.getElementById("fname").style.borderColor = 'green'

//         document.getElementById("fname_error").innerHTML = "th"
//     }
// }




// const mailfocus = () => {

//     let mailref= document.getElementById("email").value

// if(mailref === ''){
//     document.getElementById("email").style.borderColor = 'red'
//     document.getElementById("email_error").innerHTML = "error"
// }else {
//     document.getElementById("email").style.borderColor = 'green'

//     document.getElementById("email_error").innerHTML = "th"
// }
// }
