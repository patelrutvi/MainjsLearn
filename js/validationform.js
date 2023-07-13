const validateForm = () => {
    console.log("validationnnn");

    let namevalue = document.contactForm.name.value;
    let emailvalue = document.contactForm.email.value;
    let mnumvalue = document.contactForm.mobile.value;
    let contryvalue = document.contactForm.country.value;
    let gendervalue = document.contactForm.gender.value;
    let hobbivalue = document.contactForm.hobbies.value;


    console.log(namevalue);
    console.log(emailvalue);
    console.log(mnumvalue);
    console.log(contryvalue);
    console.log(gendervalue);
    console.log(hobbivalue);


    if(namevalue === ''){
        document.getElementById("nameErr").innerHTML = "please enter name"
    }else{
        
        document.getElementById("nameErr").innerHTML = " "
    }

    event.preventDefault()
}