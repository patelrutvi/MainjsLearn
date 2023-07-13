

function calculat() {
    let w = parseInt(document.getElementById("height").value)
    let h = parseInt(document.getElementById("Weight").value)

    //  console.log(w ,h)
    let m = h / 100;

    let ans = w / (m * m);

    // console.log(ans)

    if(ans < 18.6){
        document.getElementById("info").innerHTML = "BMI wheight guide" + ans + "you are Under Weight";
    }else if(ans >= 18.6 && ans <= 24.9){
        document.getElementById("info").innerHTML =  "BMI wheight guide" + ans + "you are normal range";
    }else{
        document.getElementById("info").innerHTML = "BMI wheight guide" + ans +  "you are overweight";
    }



}