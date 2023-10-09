let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

// console.log(n1 + n2)

document.getElementById("box1").innerHTML = n1;
document.getElementById("box2").innerHTML = n2;

let orians = n1 + n2

function game() {

    let user = parseInt(document.getElementById("ans").value);
    // console.log("sdgf")
    if (orians === user) {
        alert("ans is correct");
        window.location.reload();
    } else {
        alert("ans is not correct" + "  " + " Correct ans is" + orians);
        window.location.reload();
    }
}

