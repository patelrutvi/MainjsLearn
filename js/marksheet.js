let identi= prompt("name");
let fname = prompt("please enter your name");

let roll_number = prompt("rollnumber");
let rollnum = parseInt(prompt("please enter your rollnumber"));

let subphy = prompt("please enter your subject name");
let phymarks = parseInt(prompt("please enter your marks"));

let subeng = prompt("please enter your subject name");
let engmarks = parseInt(prompt("please enter your marks"));

let submaths = prompt("please enter your subject name");
let mathsmarks = parseInt(prompt("please enter your marks"));

let ans = phymarks + engmarks + mathsmarks;
let perdata = ans / 3;

document.getElementById("sname").innerHTML = identi;
document.getElementById("student_name").innerHTML = fname;

document.getElementById("sr_no").innerHTML =  roll_number;
document.getElementById("r_no").innerHTML = rollnum;

document.getElementById("phy").innerHTML = subphy;
document.getElementById("phym").innerHTML = phymarks;


document.getElementById("eng").innerHTML = subeng;
document.getElementById("engm").innerHTML = engmarks;



document.getElementById("maths").innerHTML = submaths;
document.getElementById("mathsm").innerHTML = mathsmarks;



document.getElementById("total").innerHTML = ans;

document.getElementById("per").innerHTML = perdata;


