let sub = document.getElementById("subhandel");
const heandelsub =() => {
    // console.log("dfdf")

    return false
}

const handleclick = () => {
    let basic = parseInt(document.getElementById("Basic").value)

    let d1 = parseInt(document.getElementById("Basic").value)
    let d2 = parseInt(document.getElementById("Basic").value)
    let d3 = parseInt(document.getElementById("Basic").value)
    let d4 = parseInt(document.getElementById("Basic").value)
    let d5 = parseInt(document.getElementById("Basic").value)
    let d6 = parseInt(document.getElementById("Basic").value)
     

    let dtotal = d1 + d2 + d3 + d4 + d5 + d6


    



    let salary =parseInt( document.getElementById("salary").value)
// console.log(salary)

  let s1=0,s2=0,s3=0,s4=0,s5=0,s6=0

  if(salary > 300000 && salary <= 500000){
    s1 = (salary - 300000) * 0.05
  }else if(salary > 500000 && salary <=750000){
    s1 = 200000 * 0.05
    s2 = (salary - 500000) * 0.10
  }else if(salary > 750000 && salary <=1000000){
    s1 = 200000 * 0.05
    s2 = 250000 * 0.10
    s3 = (salary - 750000 ) * 0.15
  }else if(salary > 1000000 && salary <= 1250000){
    s1 = 200000 * 0.05
    s2 = 250000 * 0.10
    s3 = 250000 * 0.15
    s4 = (salary - 1000000) * 0.20
  }else if(salary > 1250000 && salary <= 1500000){
    s1 = 200000 * 0.05
    s2 = 250000 * 0.10
    s3 = 250000 * 0.15
    s4 = 250000 * 0.20
    s5 = (salary - 1250000) * 0.25
  }else if(salary > 1500000){
    s1 = 200000 * 0.05
    s2 = 250000 * 0.10
    s3 = 250000 * 0.15
    s4 = 250000 * 0.20
    s5 = 250000 * 0.25
    s6 = (salary - 1500000) * 0.30
  }
document.getElementById("t2").innerHTML = s1
document.getElementById("t3").innerHTML = s2
document.getElementById("t4").innerHTML = s3
document.getElementById("t5").innerHTML = s4
document.getElementById("t6").innerHTML = s5
document.getElementById("t7").innerHTML = s6



}


// sub.addEventListener("submit",heandelsub)