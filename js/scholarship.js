let scholarref = document.getElementById("scholarship");


const heandelSubmit = () => {
    console.log("zxc")
    return false;
}


let heandleclick = () => {

    let namedata = document.getElementById("fname").value;

    let feesdata = parseInt(document.getElementById("fees").value);

    let cgpadata = parseFloat(document.getElementById("cgpa").value);


    let castdata = document.getElementById("cast").value;

    if (cgpadata > 9) {

        if (castdata === 'Open') {
            let greadedata = feesdata * 0
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade A"
        } else if (castdata === 'Obc') {
            let greadedata = feesdata * 0.25
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade A"
        } else if (castdata === 'Sc') {
            let greadedata = feesdata * 0.50
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade A"
        } else if (castdata === 'St') {
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade A"
            let greadedata = feesdata * 100 / 100
        }

    } else if (cgpadata > 8.5) {
        if (castdata === 'Open') {
            let greadedata = feesdata * 0
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade B"
        } else if (castdata === 'Obc') {
            let greadedata = feesdata * 0.25
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade B"
        } else if (castdata === 'Sc') {
            let greadedata = feesdata * 0.50
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade B"
        } else if (castdata === 'St') {
            let greadedata = feesdata * 0.100
            document.getElementById("data").innerHTML = "scholarship is" + greadedata + "grade B"
        }
    } else if (cgpadata > 8) {
        document.getElementById("data").innerHTML = "No eligible for scholarship" + "your grade is C"
    } else if (cgpadata > 7.5) {
        document.getElementById("data").innerHTML = "No eligible for scholarship" + "your grade is D"
    } else {
        document.getElementById("data").innerHTML = "No eligible for scholarship" + "your grade is E"
    }

}




